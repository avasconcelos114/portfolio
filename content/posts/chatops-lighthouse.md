---
title: 
date: 2020-03-30
project: false
cover_image: ../images/lighthouse/audit_result.png
slug: 'lighthouse-chatops'
published: false
tags: ['Node', 'MongoDB', 'ChatOps']
canonical_url: false
description: "Using ChatOps interfaces for website auditing and performance tracking over time"
---

# Using ChatOps interfaces for website auditing and performance tracking over time

If there is something every developer strives to accomplish when building a new website, is to make sure their site adheres to the almost mythical "best practices", and to make sure their website is light and performant. But how _exactly_ are developers supposed to measure performance? What are the practices considered to be best practices when it comes to developing for the web?

Questions like these led Google to create its own website auditing toolset called Lighthouse.

Lighthouse audits a site of your choice for a number of key metrics that relate to 5 different categories:
* Performance
* Accessibility
* Best Practices
* Search Engine Optimization
* Progressive Web App

This allows developers working on a new site to quickly test how their website performs against each metric, and Google provides a detailed report with customized tips for how to improve the metrics of _your_ particular site.

![](../images/lighthouse/lighthouse_html_report.png)

Lighthouse checks as many as 80 different metrics for the 5 available categories and leaves you with a clear gameplan of how you'd be able to improve each metric.

## Limitations

One of the leading reasons why a tool as good as Lighthouse has struggled to gain significant popularity is because of how hard it is to integrate it into the regular workflow of developers. The easiest way to currently use it requires you to remember to visit the `Audit` tab of the Chrome dev tools and manually run an audit.

But even when running it on the `Audit` tab, the performance metrics may wildly vary depending on your internet connection, or processes running in the background of your computer.

The only valid alternative that doesn't run into the first two problems is setting a CI/CD pipeline to run periodic audits against your website, but this method requires you to have prior knowledge in settting up CI/CD pipelines, as well as making it difficult to view past reports or track their performance over time.

## @ChatOps joined the channel

Creating a containerized chatbot server offers the same benefits as running CI/CD pipelines with regards to getting consistent performance results, with the added benefit of giving you full control of how and when your audits can be run.

Some of this chatbot's main features include:

* Runnning ad-hoc audits on their websites or schedule periodic runs, and view the results directly on a Mattermost channel of their choice

![](../images/lighthouse/audit_result.png)

* When testing pages hidden behind an authentication screen, inject a script for your login session that can be as simple as:

```
(() => {
  document.querySelector('#loginId').value = 'username';
  document.querySelector('#loginPassword').value = 'password';
  document.querySelector('#loginButton').click();
})();
```
On top of that, having their audit results persisted on MongoDB allows them to have complete access to their history of past audits, which are easily accessible by clicking the `View full report here` button on any in-channel reports.


* After running at least 2 audits on a given URL, developers can view trend charts of how the latest audit compares to past results on each of the 5 audit categories

![](../images/lighthouse/audit_trend.png)

You may view the original project and instructions for setup at https://github.com/avasconcelos114/lighthouse-bot
---
layout: page
permalink: /publications/
title: Publications
description: Working papers and published research.
nav: true
nav_order: 2
---

<style>
  .publication-section {
    margin-top: 2.2rem;
  }

  .publication-section h2 {
    font-size: 1.35rem;
    margin-bottom: 1rem;
    color: var(--global-text-color);
  }

  .publications details {
    margin-top: 0.35rem;
    margin-bottom: 0.35rem;
  }

  .publications summary {
    cursor: pointer;
    display: inline-block;
    padding: 0.15rem 0.5rem;
    border: 1px solid var(--global-theme-color);
    border-radius: 4px;
    color: var(--global-theme-color);
    font-size: 0.86rem;
    font-weight: 500;
  }

  .publications details[open] summary {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
  }
</style>

{% include bib_search.liquid %}

<div class="publications">

<div class="publication-section">

## Work in Progress

{% bibliography --query @*[category=work-in-progress] %}

</div>

<div class="publication-section">

## Working Papers

{% bibliography --query @*[category=working-paper] %}

</div>

<div class="publication-section">

## Published

{% bibliography --query @*[category=published] %}

</div>

</div>

---
layout: page
permalink: /publications/
title: Research
description: Working papers, publications, theses, and projects.
nav: true
nav_order: 2
---

<style>
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

  .publications details p {
    margin: 0.45rem 0;
  }
</style>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

---
layout: page
permalink: /publications/
title: Publications
description: Working papers and published research.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">

<h2 class="mt-4">Work in Progress</h2>
<p><strong>Current research projects in progress.</strong></p>

{% bibliography --group_by none --query @*[topic=progress]* %}

<h2 class="mt-4">Working Papers</h2>
<p><strong>Working papers and manuscripts under development.</strong></p>

{% bibliography --group_by none --query @*[topic=working]* %}

<h2 class="mt-4">Published</h2>
<p><strong>Published articles, thesis work, and other publications.</strong></p>

{% bibliography --group_by none --query @*[topic=published]* %}

</div>

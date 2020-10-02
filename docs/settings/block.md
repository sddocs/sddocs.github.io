---
layout: default
title: Block list
parent: Settings
nav_order: 3
---

# App block list
{: .no_toc }

Basic configuration when creating pages and templates.

> You can check out some [examples](/docs/examples/) right away.


Each block is an HTML component with its own set of parameters (most of them can be changed).

All blocks are grouped into categories:

### Basic

Basic and most used blocks for building pages.
Column is a <div> tag, inside which all other content is placed, i.e. it is good practice to wrap the entire page in a Column.

> In the Video block (on the example of YouTube), insert the video ID, not the entire URL.
> For example, for the link ``https://www.youtube.com/watch?v=yg4eqNruI_o это yg4eqNruI_o``, it would be ``yg4eqNruI_o``.
>
> HTML5 source only downloads videos from the server (some commercials are likely to be there).


Here are other available blocks. They work immediately after adding.

<span class="doc_image">![basic](/assets/images/settings/basic.png)</span>

### Extra

This category contains elements that are used not so often.
They may help you customize a page and add some personality in it.
They also do not require any complicated configuration.

<span class="doc_image">![extra](/assets/images/settings/extra.png)</span>

### Forms

Elements for building forms. It does not have its own design, but it is always possible to add classes through the Style Manager.

> All elements can be inserted only inside the form (the main Form element). That's the reason why they are in a separate category.

<span class="doc_image">![forms](/assets/images/settings/forms.png)</span>

### Social

Elements for social links display (authorization via social networks, likes, etc.).

<span class="doc_image">![social](/assets/images/settings/social.png)</span>

### Ready to use blocks

Ready-made blocks for building a Thank you page.
All content on the blocks is automatically replaced with correct information when the client places an order.

The product list in **Sidebar order info** and **Order Summary** blocks is clickable, but note that the link is taken from the SKU field of the product. It is written into *handle* when uploading products, so you can manually change the link of any product by editing it in the Shopify admin panel.

<span class="doc_image">![ready](/assets/images/settings/ready.png)</span>


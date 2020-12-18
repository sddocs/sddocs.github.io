---
layout: default
title: Preloader create
parent: Settings
nav_order: 1
---

# Preloader create
{: .no_toc }

## Sections
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## First create
Если ранее вы удалили прелоадер, то вы увидите баннер

<span class="doc_image">![create](/assets/images/settings/create.png)</span>

To create a preloader, click <strong>Create new</strong> button. You will be redirected to the preloader creation form.

Items available for editing:

* <strong>Icon</strong> - an image showing the loading process. You can upload any image, but its size should be no more than 512 kb. You can also choose one of the 12 standard icons.

* <strong>Text</strong> - a preloader’s body. It is a wisywyg editor where you can insert any text, images, video (as links). When viewing the preloader, it will be displayed strictly in the center, below the animation icon.

* <strong>Color</strong> - a selection of the color palette of the preloader background. You can select the fill type (radial, linear, repeating) and its direction. Click here for more details.

* <strong>Delay</strong> - delay before displaying your custom thank you page. Actually, it is the display time of the preloader and it is recorded in seconds. If you leave the field empty, it will be 3 seconds.

<span class="doc_image">![createform](/assets/images/settings/create_form.png)</span>

## Install the preloader in the store

After creating the preloader, you will find a link to the script for installing your preloader to the store on the main <strong>Settings</strong> page.

<span class="doc_image">![preloaderlink](/assets/images/settings/preloader_link.png)</span>

Click on "Get Link", then "Copy Link".

Then go to the settings of your theme:
```yaml
https://example.myshopify.com/admin/settings/checkout (where example is your domain).
```

Find the <strong>Additional scripts</strong> field, paste the copied script and click <strong>Save</strong>.

<span class="doc_image">![addscript](/assets/images/settings/add_script.png)</span>







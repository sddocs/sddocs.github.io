---
layout: default
title: Create page
parent: Pages
nav_order: 0
---

# Create page
{: .no_toc }

## Sections
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Your steps
Click Сreate new button to create a Thank you page.

<span class="doc_image">![edit](/assets/images/pages/create.png)</span>

The page creation interface opens.

<span class="doc_image">![edit](/assets/images/pages/create_form.png)</span>

By default, an element grid is enabled. It can help you position your elements. You can disable if needed.

<span class="doc_image">![edit](/assets/images/pages/panel.png)</span>


There are also the following items there:

<button type="button" id="menu_items" name="button" onclick="showHide(document.querySelectorAll('blockquote')[0])" class="btn btn-purple"> Menu items ▼</button><br>

> - Export of HTML markup for the page if you want to apply it elsewhere;
> - Undo change;
> - Revert the undone change;
> - Import of HTML markup. You may upload any page here if you wish, but the correctness of its display is not guaranteed.
>
> <span class="doc_image" id="import" onclick="showModal(this.getAttribute('id'))">![import](/assets/images/pages/import.gif)</span>

<button type="button" id="menu_items" name="button" onclick="showHide(document.querySelectorAll('blockquote')[1])" class="btn btn-purple"> Element settings ▼</button><br>

> There are 4 items on the above panel as well.
>
> <span class="doc_image" id="import" onclick="showModal(this.getAttribute('id'))">![import](/assets/images/pages/setting_list.png)</span>
> - Style Manager - attributes, parameters of the selected element;;
> - Settings - settings of the selected element display;
> - Layer Manager- a manager of layers;
> - Block - a menu with the available blocks (it is enabled by default).

Each element added to the field has its settings. Just click on any of the elements added to the field to view them on the right sidebar.

<span class="doc_image" id="drop" onclick="showModal(this.getAttribute('id'))">![drop](/assets/images/pages/drop.gif)</span>

<span class="doc_image" id="style" onclick="showModal(this.getAttribute('id'))">![style](/assets/images/pages/style.gif)</span>


## More information

* More information about Style Manager settings can be found here;
* More information about Component settings can be found here;
* More information about Layer Manager can be found here;
* More information about Block can be found here.

<script>
    let quotes = document.querySelectorAll('blockquote');
    window.onload = function() {
        for (const key in quotes) {
            typeof quotes[key] == 'object' ? quotes[key].style.display = 'none' : '';
        }
    };
    function showList(id) {
        console.log(id)
    }
</script>
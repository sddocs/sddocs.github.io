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

<span class="doc_image">![create](/assets/images/pages/create.png)</span>

Then you will need to select one of the templates.

<span class="doc_image">![template_list](/assets/images/pages/template_list.png)</span>

The page creation interface opens.

<span class="doc_image">![create_form](/assets/images/pages/create_form.png)</span>

Если вы создаёте свою первую страницу, то вам будет предложено открыть редактор страниц в полноэкранном режиме. Что значительно упрощает редактирование страницы и позиционироние элементов на ней.

<span class="doc_image" id="confirm" onclick="showModal(this.getAttribute('id'))">![confirm_full](/assets/images/pages/confirm_full.gif)</span>

Вы всегда можете изменить данную настройку в настройках приложения.

<span class="doc_image" id="fullpage_swap" onclick="showModal(this.getAttribute('id'))">![confirm_full](/assets/images/settings/fullpage_swap.gif)</span>

By default, an element grid is enabled. It can help you position your elements. You can disable if needed.

<span class="doc_image">![panel](/assets/images/pages/panel.png)</span>


There are also the following items there:

<button type="button" id="menu_items" name="button" onclick="showHide('blockquote')" class="btn btn-purple"> Element settings ▼</button><br>

> There are 4 items on the above panel as well.
>
> <span class="doc_image" id="import" onclick="showModal(this.getAttribute('id'))">![import](/assets/images/pages/setting_list.png)</span>
> - Style Manager - attributes, parameters of the selected element;;
> - Settings - settings of the selected element display;
> - Layer Manager- a manager of layers;
> - Block - a menu with the available blocks (it is enabled by default).

Each element added to the field has its settings. Just click on any of the elements added to the field to view them on the right sidebar.

<span class="doc_image" id="drop" onclick="showModal(this.getAttribute('id'))">![drop](/assets/images/pages/drop.gif)</span>

Так же у каждого блока присутствуют стили и настройки, об этом вы можете прочитать дальше в документации.

<span class="doc_image" id="style" onclick="showModal(this.getAttribute('id'))">![style](/assets/images/pages/style.gif)</span>


## More information

* More information about Style Manager settings can be found [here](/docs/editor_settings/style/);
* More information about Component settings can be found [here](/docs/editor_settings/component/);
* More information about Layer Manager can be found [here](/docs/editor_settings/layer/);
* More information about Block can be found [here](/docs/editor_settings/block/);

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
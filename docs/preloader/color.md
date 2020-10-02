---
layout: default
title: Color
parent: Preloader
nav_order: 3
---

# Colors

You need to choose a color when creating or editing a preloader.

Available settings:

1. Color (with a possibility to use gradient);

2. Fill type;

3. Fill direction.

<hr>

1. To add a color, left-click on any area of the color scale (by default, it is painted as a chessboard, there is no color).<br>
<span class="doc_image" id="color" onclick="showModal(this.getAttribute('id'))">![color](/assets/images/preloader/color.gif)</span>
Markers with “anchors” in the lower part will appear. Left-click on them on to select a color.
Color can be removed at any time by clicking on the cross at the top of the marker.


2. You can choose from 4 fill types:
    * Radial
    <button type="button" name="button" onclick="showHide('category_radial')" class="btn btn-purple"> ▼</button><br>
    <span class="category_radial">![color](/assets/images/preloader/radial.png)</span>
    * Linear
    <button type="button" name="button" onclick="showHide('category_linear')" class="btn btn-purple"> ▼</button><br>
    <span class="category_linear">![color](/assets/images/preloader/linear.png)</span>
    * Repeating radial
    <button type="button" name="button" onclick="showHide('r_radial')" class="btn btn-purple"> ▼</button><br>
    <span class="r_radial">![color](/assets/images/preloader/repeat_radial.png)</span>
    * Repeating linear
    <button type="button" name="button" onclick="showHide('r_linear')" class="btn btn-purple"> ▼</button><br>
    <span class="r_linear">![color](/assets/images/preloader/repeat_linear.png)</span>

3. You can also choose a direction for each type.
    * Radial
    <button type="button" name="button" onclick="showHide('category_radial_direction')" class="btn btn-purple"> ▼</button><br>
    <span class="category_radial_direction">
        <span>top</span>
        ![color](/assets/images/preloader/rtop.png)
        <span>right</span>
        ![color](/assets/images/preloader/rright.png)
        <span>center</span>
        ![color](/assets/images/preloader/rcenter.png)
        <span>left</span>
        ![color](/assets/images/preloader/rleft.png)
        <span>bottom</span>
        ![color](/assets/images/preloader/rbottom.png)
    </span>
    * Linear
    <button type="button" name="button" onclick="showHide('category_linear_direction')" class="btn btn-purple"> ▼</button><br>
    <span class="category_linear_direction">
        <span>top</span>
        ![color](/assets/images/preloader/ltop.png)
        <span>right</span>
        ![color](/assets/images/preloader/lright.png)
        <span>center</span>
        ![color](/assets/images/preloader/lcenter.png)
        <span>left</span>
        ![color](/assets/images/preloader/lleft.png)
        <span>bottom</span>
        ![color](/assets/images/preloader/lbottom.png)
    </span>
    * Repeating radial
    <button type="button" name="button" onclick="showHide('category_rr_radial')" class="btn btn-purple"> ▼</button><br>
    <span class="category_rr_radial">
        <span>top</span>
        ![color](/assets/images/preloader/rr_top.png)
        <span>right</span>
        ![color](/assets/images/preloader/rr_right.png)
        <span>center</span>
        ![color](/assets/images/preloader/rr_center.png)
        <span>left</span>
        ![color](/assets/images/preloader/rr_left.png)
        <span>bottom</span>
        ![color](/assets/images/preloader/rr_bottom.png)
    </span>
    * Repeating linear
    <button type="button" name="button" onclick="showHide('category_rr_linear')" class="btn btn-purple"> ▼</button><br>
    <span class="category_rr_linear">
        <span>top</span>
        ![color](/assets/images/preloader/rl_top.png)
        <span>right</span>
        ![color](/assets/images/preloader/rl_right.png)
        <span>center</span>
        ![color](/assets/images/preloader/rl_center.png)
        <span>left</span>
        ![color](/assets/images/preloader/rl_left.png)
        <span>bottom</span>
        ![color](/assets/images/preloader/rl_bottom.png)
    </span>

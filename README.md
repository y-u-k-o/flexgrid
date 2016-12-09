# FlexGrid
Grid based on display flex CSS property.

## Example

Check out the [live demo](https://codepen.io/yukozlovskiy/full/QGrbBN/) or take a look at the [example folder](https://github.com/yukozlovskiy/flexgrid/tree/master/example).

## How to use

### Grid options

See how aspects of the FlexGrid system work across multiple devices with a handy table.

<table>
    <thead>
        <tr>
          <th></th>
          <th>Extra small (Default)<br><small>&lt;576px</small></th>
          <th>Small<br><small>≥576px</small></th>
          <th>Medium<br><small>≥768px</small></th>
          <th>Large<br><small>≥992px</small></th>
          <th>Extra large<br><small>≥1200px</small></th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Grid behavior</td>
          <td>Horizontal at all times</td>
          <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
        </tr>
        <tr>
          <td>Class prefix</td>
          <td><code>.col-xs-</code></td>
          <td><code>.col-sm-</code></td>
          <td><code>.col-md-</code></td>
          <td><code>.col-lg-</code></td>
          <td><code>.col-xl-</code></td>
        </tr>
        <tr>
          <td># of columns</td>
          <td colspan="5">12</td>
        </tr>
        <tr>
          <td>Gutter width</td>
          <td colspan="5">10px (5px on each side of a column)</td>
        </tr>
        <tr>
          <td>Nestable</td>
          <td colspan="5">Yes</td>
        </tr>
        <tr>
          <td>Column ordering</td>
          <td colspan="5">Yes</td>
        </tr>
    </tbody>
</table>

### HTML Syntax

FlexGrid uses the same classes as Bootstrap. All you need to keep HTML syntax in that way: row, column, content.

```html
<div class="row">
  <div class="col-xs-6">
    <div class="content">col-xs-6</div>
  </div>
  <div class="col-xs-6">
    <div class="content">col-xs-6</div>
  </div>
</div>
```

### Responsive

Responsive grid works by adding media classes to the grid cells (xs, sm, md, etc.). When those media values are met, the grids automatically adjust accordingly.

```html
<div class="row">
  <div class="col-xs-6 col-sm-10 col-md-8">
    <div class="content">Responsive</div>
  </div>
  <div class="col-xs-6 col-sm-2 col-md-4">
    <div class="content">Responsive</div>
  </div>
</div>
```

### Auto Width

You can set the width of one column and the others will automatically resize around it.

```html
<div class="row">
  <div class="col-xs">
    <div class="content">Auto</div>
  </div>
  <div class="col-xs">
    <div class="content">Auto</div>
  </div>
</div>
```

### Nesting

Grid components are infinitely nestable inside of other grid components.

```html
<div class="row">
  <div class="col-xs">
    <div class="content">
      <div class="row">
        <div class="col-xs">
          <div class="content">Auto</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### No Gutter

Remove gutter from row.

#### <code>.row-no-gutter</code>

```html
<div class="row row-no-gutter">
  <div class="col-xs-6">
    <div class="content"></div>
  </div>
  <div class="col-xs-6">
    <div class="content"></div>
  </div>
</div>
```

### Equal Column Height

Add the same height to each column.

#### <code>.row-equal-height</code>

```html
<div class="row row-equal-height">
  <div class="col-xs-6">
    <div class="content"></div>
  </div>
  <div class="col-xs-6">
    <div class="content"></div>
  </div>
</div>
```

### Horizontal alignment

FlexGrid properties for horizontal alignment. Add classes to align elements.

#### <code>.row-start</code>

```html
<div class="row row-start">
  <div class="col-xs-6">
    <div class="content">Start</div>
  </div>
</div>
```

#### <code>.row-center</code>

```html
<div class="row row-center">
  <div class="col-xs-6">
    <div class="content">Center</div>
  </div>
</div>
```

#### <code>.row-end</code>

```html
<div class="row row-end">
  <div class="col-xs-6">
    <div class="content">End</div>
  </div>
</div>
```

#### <code>.row-around</code>

```html
<div class="row row-around">
  <div class="col-xs-2">
    <div class="content">Around</div>
  </div>
  <div class="col-xs-2">
    <div class="content">Around</div>
  </div>
  <div class="col-xs-2">
    <div class="content">Around</div>
  </div>
</div>
```

#### <code>.row-between</code>

```html
<div class="row row-between">
  <div class="col-xs-2">
    <div class="content">Between</div>
  </div>
  <div class="col-xs-2">
    <div class="content"Between</div>
  </div>
  <div class="col-xs-2">
    <div class="content">Between</div>
  </div>
</div>
```

### Vertical alignment

FlexGrid properties for vertical alignment. Add classes to align elements.

#### <code>.row-top</code>

```html
<div class="row row-top">
  <div class="col-xs-6">
    <div class="content">Top</div>
  </div>
</div>
```

#### <code>.row-middle</code>

```html
<div class="row row-middle">
  <div class="col-xs-6">
    <div class="content">Top</div>
  </div>
</div>
```

#### <code>.row-bottom</code>

```html
<div class="row row-bottom">
  <div class="col-xs-6">
    <div class="content">Top</div>
  </div>
</div>
```

### Reversing

#### <code>.row-reverse</code>

```html
<div class="row row-reverse">
  <div class="col-xs-2">
    <div class="content">1</div>
  </div>
  <div class="col-xs-2">
    <div class="content">2</div>
  </div>
  <div class="col-xs-2">
    <div class="content">3</div>
  </div>
</div>
```

### Reordering

#### <code>.col-first</code>

```html
<div class="row">
  <div class="col-xs-2">
    <div class="content">1</div>
  </div>
  <div class="col-xs-2">
    <div class="content">2</div>
  </div>
  <div class="col-xs-2 col-first">
    <div class="content">3</div>
  </div>
</div>
```

#### <code>.col-last</code>

```html
<div class="row">
  <div class="col-xs-2 col-last">
    <div class="content">1</div>
  </div>
  <div class="col-xs-2">
    <div class="content">2</div>
  </div>
  <div class="col-xs-2">
    <div class="content">3</div>
  </div>
</div>
```


## css
* [Development](https://raw.githubusercontent.com/yukozlovskiy/flexgrid/master/dist/css/flexgrid.css)
* [Production](https://raw.githubusercontent.com/yukozlovskiy/flexgrid/master/dist/css/flexgrid.min.css)



```
<link rel="stylesheet" href="flexgrid.min.css" type="text/css">
```

## Changelog

##### v1.0.0 - 06/12/2016

 - initial release
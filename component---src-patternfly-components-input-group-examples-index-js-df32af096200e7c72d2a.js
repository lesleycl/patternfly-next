webpackJsonp([0xd9da0c56e016],{817:function(t,r){t.exports="<h2 id=overview>Overview</h2> <p>Use the input group to extend form controls by adding text, buttons, dropdowns, etc.</p> <h2 id=accessibility>Accessibility</h2> <p>When using the <code>pf-c-input-group</code> always ensure labels are used outside the input group with the <code>.pf-u-sr-only</code> class applied. You can also make use of the <code>aria-describedby</code>, <code>aria-label</code>, or <code>aria-labelledby</code> attributues. For more information on accessibility and forms see the <a href=/components/form/examples/ >form component</a>.</p> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-describedby</code></td> <td><code>pf-c-form-control</code></td> <td>When using <code>.pf-c-input-group__text</code> or <code>.pf-c-input-group__action</code> make use of this on the input field.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-input-group</code></td> <td><code>&lt;div&gt;</code></td> <td>Iniaties the input group. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-input-group__text</code></td> <td><code>&lt;span&gt;</code></td> <td>Iniaties the input group text. This can be used to show text, radio, icons, or check boxes.</td> </tr> </tbody> </table> "},290:function(t,r,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.Docs=void 0;var a=n(3),o=e(a),i=n(11),u=e(i),p=n(12),l=e(p),s=n(1065),d=e(s),c=n(655),m=e(c),f=n(817),b=e(f);n(993);var h=r.Docs=b.default;r.default=function(){var t=(0,m.default)(),r="Input Group";return o.default.createElement(u.default,{docs:h,heading:r},o.default.createElement(l.default,{heading:"Inputgroup Example",handlebars:d.default},t))}},655:function(t,r,n){var e=n(1);t.exports=(e.default||e).template({1:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(5),r,{name:"button",hash:{"button--attribute":'id="textAreaButton1"',"button--modifier":"pf-m-secondary"},fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'name="textarea1" id="textarea1" aria-label="textarea with buttons" aria-describedby="textAreaButton1"',controlType:"textarea"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(5),r,{name:"button",hash:{"button--modifier":"pf-m-tertiary"},fn:t.program(6,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},2:function(t,r,n,e,a){return"    Button\n"},4:function(t,r,n,e,a){return""},6:function(t,r,n,e,a){return"    Button \n"},8:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'name="textarea2" id="textarea2" aria-label="textarea with button" aria-describedby="textAreaButton2"',controlType:"textarea"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(5),r,{name:"button",hash:{"button--attribute":'id="textAreaButton2"',"button--modifier":"pf-m-tertiary"},fn:t.program(9,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},9:function(t,r,n,e,a){return"      Button \n"},11:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(35),r,{name:"dropdown",hash:{"dropdown--HasToggleIcon":"true",id:"dropdown-example-collapsed1"},fn:t.program(12,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'input="true" type="text" id="textInput3" name="textInput3" aria-label="input with dropdown and button" aria-describedby="inputDropdownButton1"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(5),r,{name:"button",hash:{"button--attribute":'id="inputDropdownButton1"',"button--modifier":"pf-m-secondary"},fn:t.program(2,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},12:function(t,r,n,e,a){return"    Dropdown\n"},14:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(108),r,{name:"input-group-text",hash:{"input-group-text--HasDollarSignIcon":"true",inputGroupTextType:"span"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'input="true" type="number" id="textInput5" name="textInput5" aria-label=" Dollar amount input example"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(108),r,{name:"input-group-text",hash:{inputGroupTextType:"span"},fn:t.program(15,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},15:function(t,r,n,e,a){return"   .00\n"},17:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'input="true" type="email" id="textInput6" name="textInput6" aria-label="email input field" aria-describedby="email-example"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(108),r,{name:"input-group-text",hash:{"input-group-text--attribute":'id="email-example"',inputGroupTextType:"span"},fn:t.program(18,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},18:function(t,r,n,e,a){return"   @example.com\n"},20:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(108),r,{name:"input-group-text",hash:{"aria-label":"@","input-group-text--attribute":'id="username"',"input-group-text--HasAtIcon":"true",inputGroupTextType:"span"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'required input="true" type="email" id="textInput7" name="textInput7" aria-invalid="true" aria-label="Error state username example" aria-describedby="username"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},22:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(108),r,{name:"input-group-text",hash:{"input-group-text--attribute":'for="textInput9"',"input-group-text--HasCalendarIcon":"true",inputGroupTextType:"label"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'input="true" type="date" id="textInput9" name="textInput9" aria-label="Date input example"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},24:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'input="true" type="search" id="textInput11" name="textInput11" aria-label="search input example"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(5),r,{name:"button",hash:{"button--attribute":'aria-label="search button for search input"',"button--HasSearchIcon":"true","button--modifier":"pf-m-tertiary"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},26:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(17),r,{name:"form-control",hash:{"form-control--attribute":'input="true" type="text" id="textInput10" name="textInput10" aria-label="input example with popover"',controlType:"input"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+(null!=(i=t.invokePartial(n(5),r,{name:"button",hash:{"button--attribute":'aria-label="popover for input"',"button--HasQuestionCircleIcon":"true","button--modifier":"pf-m-tertiary"},fn:t.program(4,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},compiler:[7,">= 4.0.0"],main:function(t,r,e,a,o){var i;return(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(1,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(8,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(11,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(14,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(17,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(20,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(22,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(24,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")+"<br>\n<br>\n"+(null!=(i=t.invokePartial(n(43),r,{name:"input-group",fn:t.program(26,o,0),inverse:t.noop,data:o,helpers:e,partials:a,decorators:t.decorators}))?i:"")},usePartial:!0,useData:!0})},1065:function(t,r){t.exports='{{#> input-group }}\n {{#> button button--modifier="pf-m-secondary" button--attribute=\'id="textAreaButton1"\'}} \n    Button\n  {{/button}}\n  {{#> form-control controlType="textarea" form-control--attribute=\'name="textarea1" id="textarea1" aria-label="textarea with buttons" aria-describedby="textAreaButton1"\'}}\n  {{/form-control}}\n  {{#> button button--modifier="pf-m-tertiary"}}\n    Button \n  {{/button}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n {{#> form-control controlType="textarea" form-control--attribute=\'name="textarea2" id="textarea2" aria-label="textarea with button" aria-describedby="textAreaButton2"\'}}\n{{/form-control}}\n   {{#> button button--modifier="pf-m-tertiary" button--attribute=\'id="textAreaButton2"\'}} \n      Button \n    {{/button}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n  {{#> dropdown id="dropdown-example-collapsed1" dropdown--HasToggleIcon="true" }}\n    Dropdown\n  {{/dropdown}}\n  {{#> form-control controlType="input" form-control--attribute=\'input="true" type="text" id="textInput3" name="textInput3" aria-label="input with dropdown and button" aria-describedby="inputDropdownButton1"\'}}\n  {{/form-control}}\n  {{#> button button--modifier="pf-m-secondary" button--attribute=\'id="inputDropdownButton1"\'}}\n    Button\n  {{/button}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n {{#> input-group-text inputGroupTextType="span" input-group-text--HasDollarSignIcon="true"}}\n {{/input-group-text}}\n {{#> form-control controlType="input" form-control--attribute=\'input="true" type="number" id="textInput5" name="textInput5" aria-label=" Dollar amount input example"\'}}\n {{/form-control}}\n{{#> input-group-text inputGroupTextType="span"}}\n   .00\n {{/input-group-text}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n  {{#> form-control controlType="input" form-control--attribute=\'input="true" type="email" id="textInput6" name="textInput6" aria-label="email input field" aria-describedby="email-example"\'}}\n  {{/form-control}}\n {{#> input-group-text inputGroupTextType="span" input-group-text--attribute=\'id="email-example"\'}}\n   @example.com\n {{/input-group-text}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n {{#> input-group-text inputGroupTextType="span" input-group-text--HasAtIcon="true"  input-group-text--attribute=\'id="username"\' aria-label="@"}}\n {{/input-group-text}}\n {{#> form-control controlType="input" form-control--attribute=\'required input="true" type="email" id="textInput7" name="textInput7" aria-invalid="true" aria-label="Error state username example" aria-describedby="username"\'}}\n{{/form-control}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n {{#> input-group-text inputGroupTextType="label" input-group-text--HasCalendarIcon="true" input-group-text--attribute=\'for="textInput9"\' }}\n {{/input-group-text}}\n {{#> form-control controlType="input" form-control--attribute=\'input="true" type="date" id="textInput9" name="textInput9" aria-label="Date input example"\'}}\n{{/form-control}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n  {{#> form-control controlType="input" form-control--attribute=\'input="true" type="search" id="textInput11" name="textInput11" aria-label="search input example"\'}}\n  {{/form-control}}\n  {{#> button button--modifier="pf-m-tertiary" button--HasSearchIcon="true" button--attribute=\'aria-label="search button for search input"\' }}\n  {{/button}}\n{{/input-group}}\n<br>\n<br>\n{{#> input-group }}\n  {{#> form-control controlType="input" form-control--attribute=\'input="true" type="text" id="textInput10" name="textInput10" aria-label="input example with popover"\'}}\n  {{/form-control}}\n  {{#> button button--modifier="pf-m-tertiary" button--HasQuestionCircleIcon="true" button--attribute=\'aria-label="popover for input"\' }}\n  {{/button}}\n{{/input-group}}\n'},656:function(t,r,n){var e=n(1);t.exports=(e.default||e).template({compiler:[7,">= 4.0.0"],main:function(t,r,n,e,a){return'<i class="fas fa-at" aria-hidden="true"></i>'},useData:!0})},657:function(t,r,n){var e=n(1);t.exports=(e.default||e).template({compiler:[7,">= 4.0.0"],main:function(t,r,n,e,a){return'<i class="fas fa-calendar-alt" aria-hidden="true"></i>'},useData:!0})},658:function(t,r,n){var e=n(1);t.exports=(e.default||e).template({compiler:[7,">= 4.0.0"],main:function(t,r,n,e,a){return' <i class="fas fa-dollar-sign" aria-hidden="true"></i>'},useData:!0})},108:function(t,r,n){var e=n(1);t.exports=(e.default||e).template({1:function(t,r,n,e,a){return" "+t.escapeExpression(t.lambda(null!=r?r["input-group-text--modifier"]:r,r))},3:function(t,r,n,e,a){return'  \taria-label="'+t.escapeExpression(t.lambda(null!=r?r["aria-label"]:r,r))+'"\n'},5:function(t,r,n,e,a){var o;return"    "+(null!=(o=t.lambda(null!=r?r["input-group-text--attribute"]:r,r))?o:"")+"\n\t"},7:function(t,r,e,a,o){var i;return null!=(i=t.invokePartial(n(658),r,{name:"input-group-dollarsign-icon",data:o,indent:"\t\t",helpers:e,partials:a,decorators:t.decorators}))?i:""},9:function(t,r,e,a,o){var i;return null!=(i=t.invokePartial(n(656),r,{name:"input-group-at-icon",data:o,indent:"\t\t",helpers:e,partials:a,decorators:t.decorators}))?i:""},11:function(t,r,e,a,o){var i;return null!=(i=t.invokePartial(n(657),r,{name:"input-group-calendar-icon",data:o,indent:"\t\t",helpers:e,partials:a,decorators:t.decorators}))?i:""},compiler:[7,">= 4.0.0"],main:function(t,r,n,e,a){var o,i=t.lambda,u=t.escapeExpression,p=null!=r?r:t.nullContext||{};return"<"+u(i(null!=r?r.inputGroupTextType:r,r))+' class="pf-c-input-group__text'+(null!=(o=n.if.call(p,null!=r?r["input-group-text--modifier"]:r,{name:"if",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?o:"")+'"\n'+(null!=(o=n.if.call(p,null!=r?r["aria-label"]:r,{name:"if",hash:{},fn:t.program(3,a,0),inverse:t.noop,data:a}))?o:"")+(null!=(o=n.if.call(p,null!=r?r["input-group-text--attribute"]:r,{name:"if",hash:{},fn:t.program(5,a,0),inverse:t.noop,data:a}))?o:"")+">\n"+(null!=(o=t.invokePartial(e["@partial-block"],r,{name:"@partial-block",data:a,indent:"\t",helpers:n,partials:e,decorators:t.decorators}))?o:"")+(null!=(o=n.if.call(p,null!=r?r["input-group-text--HasDollarSignIcon"]:r,{name:"if",hash:{},fn:t.program(7,a,0),inverse:t.noop,data:a}))?o:"")+(null!=(o=n.if.call(p,null!=r?r["input-group-text--HasAtIcon"]:r,{name:"if",hash:{},fn:t.program(9,a,0),inverse:t.noop,data:a}))?o:"")+(null!=(o=n.if.call(p,null!=r?r["input-group-text--HasCalendarIcon"]:r,{name:"if",hash:{},fn:t.program(11,a,0),inverse:t.noop,data:a}))?o:"")+"</"+u(i(null!=r?r.inputGroupTextType:r,r))+">"},usePartial:!0,useData:!0})},43:function(t,r,n){var e=n(1);t.exports=(e.default||e).template({1:function(t,r,n,e,a){var o;return" "+t.escapeExpression((o=null!=(o=n["input-group--modifier"]||(null!=r?r["input-group--modifier"]:r))?o:n.helperMissing,"function"==typeof o?o.call(null!=r?r:t.nullContext||{},{name:"input-group--modifier",hash:{},data:a}):o))},3:function(t,r,n,e,a){var o,i;return"    "+(null!=(i=null!=(i=n["input-group--attribute"]||(null!=r?r["input-group--attribute"]:r))?i:n.helperMissing,o="function"==typeof i?i.call(null!=r?r:t.nullContext||{},{name:"input-group--attribute",hash:{},data:a}):i)?o:"")+"\n"},5:function(t,r,n,e,a){var o;return'    id="'+t.escapeExpression((o=null!=(o=n["input-group__id"]||(null!=r?r["input-group__id"]:r))?o:n.helperMissing,"function"==typeof o?o.call(null!=r?r:t.nullContext||{},{name:"input-group__id",hash:{},data:a}):o))+'"\n  '},compiler:[7,">= 4.0.0"],main:function(t,r,n,e,a){var o,i=null!=r?r:t.nullContext||{};return'<div class="pf-c-input-group'+(null!=(o=n.if.call(i,null!=r?r["input-group--modifier"]:r,{name:"if",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?o:"")+'" \n'+(null!=(o=n.if.call(i,null!=r?r["input-group--attribute"]:r,{name:"if",hash:{},fn:t.program(3,a,0),inverse:t.noop,data:a}))?o:"")+(null!=(o=n.if.call(i,null!=r?r["input-group__id"]:r,{name:"if",hash:{},fn:t.program(5,a,0),inverse:t.noop,data:a}))?o:"")+">\n"+(null!=(o=t.invokePartial(e["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:n,partials:e,decorators:t.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},993:function(t,r){}});
//# sourceMappingURL=component---src-patternfly-components-input-group-examples-index-js-df32af096200e7c72d2a.js.map
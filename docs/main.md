# 如何识别任意网页的主要内容区域？

1. 主要标签main、article、section
2. class或者id含有main、content、main_block
3. 通过计算p,ol,ul,blockquote,h2,h3,h4,h5,pre,div权重
4. 默认是document.body

## 需要删除的标签

code
nav
svg
path
button
g
time
label
select
option
textarea
aside
fieldset
footer
iframe
img


## 权重等级
title
meta title
meta description
meta keywords
社交媒体meta标签
  og:title
  og:url
  og:description
  og:image
h1,h2,h3,h4,h5,h6
p,div普通文本

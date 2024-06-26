<template>
  <div
    class="demo-block" :class="{ 'hover': hovering }" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <div class="source">
      <slot name="source"></slot>
    </div>
     <div class="meta" ref="meta">
      <div class="description" ref="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight" ref="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-block-control" ref="control" :class="{ 'is-fixed': fixedControl }" @click="isExpanded = !isExpanded">
      <transition>
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, watch, onMounted, onUnmounted, ref, nextTick } from 'vue'
export default {
  name: 'DemoBlock'
}
</script>

<script setup lang="ts">

const hovering = ref(false)
const isExpanded = ref(false)
const fixedControl = ref(false)
const meta = ref()
const control = ref()
const description = ref()
const highlight = ref()

let scrollParent:any = null

const iconClass = computed(() => isExpanded.value ? 'vxe-icon-caret-top' : 'vxe-icon-caret-bottom')
const controlText = computed(() => isExpanded.value ? '隐藏代码' : '显示代码')
const codeAreaHeight = computed(() => {
  if (description.value) {
    return description.value.clientHeight +
        highlight.value.clientHeight + 20
  }
  return highlight.value.clientHeight
})

watch(isExpanded, (val) => {
  meta.value.style.height = val ? `${codeAreaHeight.value + 1}px` : '0'

  if (!val) {
    fixedControl.value = false
    control.value.style.left = '0'
    removeScrollHandler()
    return
  }

  setTimeout(() => {
    scrollParent = document.querySelector('.body > .content')
    scrollParent && scrollParent.addEventListener('scroll', scrollHandler)
    scrollHandler()
  }, 200)
})

const scrollHandler = () => {
  const { top, bottom, left, width } = meta.value.getBoundingClientRect()
  fixedControl.value = bottom > document.documentElement.clientHeight &&
      top + 44 <= document.documentElement.clientHeight
  control.value.style.left = fixedControl.value ? `${left}px` : '0'
  control.value.style.width = `${width}px`
}

const removeScrollHandler = () => {
  scrollParent && scrollParent.removeEventListener('scroll', scrollHandler)
}

onMounted(() => {
  nextTick(() => {
    if (description.value) {
      highlight.value.style.width = '100%'
      highlight.value.borderRight = 'none'
    }
  })
})

onUnmounted(() => {
  removeScrollHandler()
})

</script>

<style lang="scss">
  .demo-block {
    margin-bottom: 24px;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: .2s;
    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    .source {
      padding: 24px;
    }

    .meta {
      background-color: #fafafa;
      border-top: solid 1px #eaeefb;
      overflow: hidden;
      height: 0;
      transition: height .2s;
    }

   .description {
      padding: 20px;
      box-sizing: border-box;
      border: solid 1px #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;
      p {
        margin: 0;
        line-height: 26px;
      }
      code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }

    .highlight {
      .hljs {
          line-height: 1.8;
          font-family: Menlo,Monaco,Consolas,Courier,monospace;
          font-size: 12px;
          padding: 18px 24px;
          background-color: #fafafa;
          border: 1px solid #eaeefb;
          margin-bottom: 25px;
          border-radius: 4px;
          -webkit-font-smoothing: auto;
      }
      pre {
        margin: 0;
      }
      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        &::before {
          content: none;
        }
      }
    }

    .demo-block-control {
      border-top: solid 1px #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;

       &.is-fixed {
        position: fixed;
        bottom: 0;
      }

      i {
        display: inline-block;
        margin-top: 14px;
        font-size: 16px;
        transition: .3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }

      > span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
        display: inline-block;
      }

      &:hover {
        color: #409EFF;
        background-color: #f9fafc;
      }

      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }
    }
  }
</style>

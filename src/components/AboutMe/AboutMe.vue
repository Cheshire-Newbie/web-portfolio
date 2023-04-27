<template>
  <div class="containerAboutMe">
    <transition name="presentation-opacity">
    <h1 v-if="PresentationElement" class="presentationText">
      Let me tell you a few words
    </h1>
    </transition>
    <transition appear name="slide-title">
    <h1 v-if="titleElement" class="titleAboutMe">About me</h1>
    </transition>
    <div v-if="textElements" class="divTexts">
    <transition name="slide-bottom">
    <h2 v-if="textOneElement" class="textOne">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      Nemo beatae inventore quasi magni eos quis quae obcaecati voluptatum
      facere tempora, <br />
      eveniet possimus et esse est, vero optio dicta? Vitae, tenetur?<br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias a ad
      totam temporibus unde, <br />
      rerum quam inventore repudiandae delectus harum libero illum nostrum! Quo
      molestiae officiis repellat atque odit?
    </h2>
    </transition>
    <transition name="slide-bottom">
    <h2 v-if="textTwoElement" class="textTwo">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      Nemo beatae inventore quasi magni eos quis quae obcaecati voluptatum
      facere tempora, <br />
      eveniet possimus et esse est, vero optio dicta? Vitae, tenetur?<br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias a ad
      totam temporibus unde, <br />
      rerum quam inventore repudiandae delectus harum libero illum nostrum! Quo
      molestiae officiis repellat atque odit?
    </h2>
    </transition>
  </div>
  </div>
</template>

<script src="./AboutMe.js"/>
<style src="./AboutMe.css"/>


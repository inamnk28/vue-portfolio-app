<template>
    <div class="card rounded-0 mx-3 my-3">
        <div class="image">
            <img :src="testimonial.image" :alt="testimonial.name">
        </div>
        <div class="content">
            <h6 class="name text-white fs-5">{{ testimonial.name }} - {{ testimonial.desc }}</h6>
            <p class="testimonial text-white fs-6">{{ testimonial.testimonial }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['testimonial']
}
</script>
<style scoped>
   .card {
    /* position: relative; */
    background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
    width: 400px;
    overflow: hidden;
    border: none;
    /* box-shadow: 0px 2px 3px black; */
   }
   @media screen and (max-width: 480px) {
    .card {
        width: 390px
    }
   }
   @media screen and (max-width: 420px) {
    .card {
        width: 320px
    }
   }
   @media screen and (max-width: 350px) {
    .card {
        width: 280px
    }
   }
   .content {
    visibility: hidden;
   }
   .card:hover .content {
    visibility: visible;
   }
   .card:hover .image img {
    transform: scale(1.2);
    filter: blur(5px);
   }
   .card .image img {
    width: 100%;
    height: auto;
    transition: transform 1s;
   }
   .card .content::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height:40%;
      border:3px solid #333;
      border-right:3px solid transparent;
      border-bottom:3px solid transparent;
      transform: scale(1,1);
      transition: all 0.50s linear;
   }
   .card .content::after {
      content: "";
      position:absolute;
      bottom:0;
      right:0;
      width:50%;
      height:40%;
      border:3px solid #222;
      border-left:3px solid transparent;
      border-top:3px solid transparent;
      transition: all 0.50s linear;
   }
   .card:hover .content:before{
            top:20px;
            left:20px;
        }
    .card:hover .content:after{
            bottom:20px;
            right:20px;
        }
        .card .content{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            padding:50% 4%;
            text-align: center;
           
        }
        .card .content:hover{
            background-color: blur;
        }
        .card .content .title{
            font-size:24px;
            color:#333;
            opacity:0;
            letter-spacing:2px;
            text-transform:uppercase;
            transform: translateY(-100px);
            transition:all 900ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.20s;
        }
           .profile-card:hover .name{
            opacity:1;
            transform: translateY(0);
        }
        .card:hover .name::after{
            content:"";
            display:block;
            width:50%;
            margin:10px auto;
            border-bottom:2px solid #222;
        }
</style>
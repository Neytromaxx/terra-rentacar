<template>
  <section class="loader__con">
  
  <div id="cssload-wrapper">
            <div class="cssload-loader">
                <div class="cssload-line"></div>
                <div class="cssload-line"></div>
                <div class="cssload-line"></div>
                <div class="cssload-line"></div>
                <div class="cssload-line"></div>
                <div class="cssload-line"></div>
                <div class="cssload-subline"></div>
                <div class="cssload-subline"></div>
                <div class="cssload-subline"></div>
                <div class="cssload-subline"></div>
                <div class="cssload-subline"></div>
                <div class="cssload-loader-circle-1"><div class="cssload-loader-circle-2"></div></div>
                <div class="cssload-needle"></div>
                <div class="cssload-loading">loading</div>
            </div>
        </div>
</section>
</template>

<script setup>

</script>

<style scoped>
    .loader__con{
    background-image:url("https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80");
}
#cssload-wrapper {

      background-color: black;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 15;
	overflow: hidden;
}

.cssload-loader {
	width: 431px;
	height: 431px;
	border: 3px rgb(0,115,255) solid;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -216px 0 0 -216px;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
}

.cssload-loader .cssload-loading {
	font-size: 29px;
	position: absolute;
	width: 100%;
	text-align: center;
	line-height: 40px;
	font-family: 'Century Gothic', sans-serif;
	font-style: italic;
	left: 0;
	top: 50%;
	margin-top: 58px;
	color: rgb(255, 255, 255);
	font-weight: bold;
	text-transform: uppercase;
		-o-text-transform: uppercase;
		-ms-text-transform: uppercase;
		-webkit-text-transform: uppercase;
		-moz-text-transform: uppercase;
}

.cssload-loader-circle-1 {
	width: 397px;
	height: 397px;
	left: 14px;
	top: 14px;
	border: 3px rgb(255, 255, 255) solid;
	position: absolute;
	border-right-color: transparent;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	animation: spin 3.45s linear infinite;
		-o-animation: spin 3.45s linear infinite;
		-ms-animation: spin 3.45s linear infinite;
		-webkit-animation: spin 3.45s linear infinite;
		-moz-animation: spin 3.45s linear infinite;
}

.cssload-loader-circle-2 {
	width: 362px;
	height: 362px;
	left: 14px;
	top: 14px;
	border: 3px transparent solid;
	position: absolute;
	border-right-color: rgb(232,21,18);
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	animation: spin 5.75s linear infinite;
		-o-animation: spin 5.75s linear infinite;
		-ms-animation: spin 5.75s linear infinite;
		-webkit-animation: spin 5.75s linear infinite;
		-moz-animation: spin 5.75s linear infinite;
}

.cssload-loader .cssload-line {
	width: 29px;
	height: 6px;
	background: rgb(0, 255, 85);
	position: absolute;
}

.cssload-loader .cssload-line:nth-child(1) {
	left: 46px;
	top: 50%;
	margin-top: -3px;
}

.cssload-loader .cssload-line:nth-child(2) {
	transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
	left: 95px;
	top: 95px;
}

.cssload-loader .cssload-line:nth-child(3) {
	top: 46px;
	left: 50%;
	width: 6px;
	height: 29px;
}

.cssload-loader .cssload-line:nth-child(4) {
	transform: rotate(135deg);
		-o-transform: rotate(135deg);
		-ms-transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
		-moz-transform: rotate(135deg);
	right: 95px;
	top: 95px;
}

.cssload-loader .cssload-line:nth-child(5) {
	right: 46px;
	top: 50%;
	margin-top: -3px;
}

.cssload-loader .cssload-line:nth-child(6) {
	transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
	right: 95px;
	bottom: 95px;
	background: rgb(232,21,18);
}

.cssload-loader .cssload-subline {
	position: absolute;
	width: 9px;
	height: 6px;
	background: rgb(0,115,255);
}

.cssload-loader .cssload-subline:nth-child(7) {
	transform: rotate(22.5deg);
		-o-transform: rotate(22.5deg);
		-ms-transform: rotate(22.5deg);
		-webkit-transform: rotate(22.5deg);
		-moz-transform: rotate(22.5deg);
	left: 60px;
	top: 144px;
}

.cssload-loader .cssload-subline:nth-child(8) {
	transform: rotate(67.5deg);
		-o-transform: rotate(67.5deg);
		-ms-transform: rotate(67.5deg);
		-webkit-transform: rotate(67.5deg);
		-moz-transform: rotate(67.5deg);
	left: 144px;
	top: 60px;
}

.cssload-loader .cssload-subline:nth-child(9) {
	transform: rotate(112.5deg);
		-o-transform: rotate(112.5deg);
		-ms-transform: rotate(112.5deg);
		-webkit-transform: rotate(112.5deg);
		-moz-transform: rotate(112.5deg);
	right: 144px;
	top: 60px;
}

.cssload-loader .cssload-subline:nth-child(10) {
	transform: rotate(157.5deg);
		-o-transform: rotate(157.5deg);
		-ms-transform: rotate(157.5deg);
		-webkit-transform: rotate(157.5deg);
		-moz-transform: rotate(157.5deg);
	right: 60px;
	top: 144px;
}

.cssload-loader .cssload-subline:nth-child(11) {
	transform: rotate(22.5deg);
		-o-transform: rotate(22.5deg);
		-ms-transform: rotate(22.5deg);
		-webkit-transform: rotate(22.5deg);
		-moz-transform: rotate(22.5deg);
	right: 58px;
	bottom: 141px;
	background: rgb(232,21,18);
}

.cssload-loader .cssload-needle {
	width: 40px;
	height: 40px;
	border: 3px rgb(0,115,255) solid;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -23px 0 0 -23px;
	z-index: 1;
	border-radius: 50%;
		-o-border-radius: 50%;
		-ms-border-radius: 50%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
	animation: pegIt 3.45s infinite ease-in-out;
		-o-animation: pegIt 3.45s infinite ease-in-out;
		-ms-animation: pegIt 3.45s infinite ease-in-out;
		-webkit-animation: pegIt 3.45s infinite ease-in-out;
		-moz-animation: pegIt 3.45s infinite ease-in-out;
}

.cssload-loader .cssload-needle:before {
	content: "";
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 10.5px 144px 10.5px 0;
	border-color: transparent rgb(232,21,18) transparent transparent;
	position: absolute;
	right: 50%;
	top: 50%;
	margin: -10.5px 0 0 0;
	border-radius: 0 50% 50% 0;
		-o-border-radius: 0 50% 50% 0;
		-ms-border-radius: 0 50% 50% 0;
		-webkit-border-radius: 0 50% 50% 0;
		-moz-border-radius: 0 50% 50% 0;
}





@keyframes pegIt {
	0% {
		transform: rotate(0deg);
	}
	16% {
		transform: rotate(75deg);
	}
	25% {
		transform: rotate(55deg);
	}
	30% {
		transform: rotate(90deg);
	}
	36% {
		transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		transform: rotate(227deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

@-o-keyframes pegIt {
	0% {
		-o-transform: rotate(0deg);
	}
	16% {
		-o-transform: rotate(75deg);
	}
	25% {
		-o-transform: rotate(55deg);
	}
	30% {
		-o-transform: rotate(90deg);
	}
	36% {
		-o-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-o-transform: rotate(227deg);
	}
	100% {
		-o-transform: rotate(0deg);
	}
}

@-ms-keyframes pegIt {
	0% {
		-ms-transform: rotate(0deg);
	}
	16% {
		-ms-transform: rotate(75deg);
	}
	25% {
		-ms-transform: rotate(55deg);
	}
	30% {
		-ms-transform: rotate(90deg);
	}
	36% {
		-ms-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-ms-transform: rotate(227deg);
	}
	100% {
		-ms-transform: rotate(0deg);
	}
}

@-webkit-keyframes pegIt {
	0% {
		-webkit-transform: rotate(0deg);
	}
	16% {
		-webkit-transform: rotate(75deg);
	}
	25% {
		-webkit-transform: rotate(55deg);
	}
	30% {
		-webkit-transform: rotate(90deg);
	}
	36% {
		-webkit-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-webkit-transform: rotate(227deg);
	}
	100% {
		-webkit-transform: rotate(0deg);
	}
}

@-moz-keyframes pegIt {
	0% {
		-moz-transform: rotate(0deg);
	}
	16% {
		-moz-transform: rotate(75deg);
	}
	25% {
		-moz-transform: rotate(55deg);
	}
	30% {
		-moz-transform: rotate(90deg);
	}
	36% {
		-moz-transform: rotate(170deg);
	}
	42% {
		transform: rotate(150deg);
	}
	50% {
		-moz-transform: rotate(227deg);
	}
	100% {
		-moz-transform: rotate(0deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@-o-keyframes spin {
	0% {
		-o-transform: rotate(0deg);
	}
	100% {
		-o-transform: rotate(360deg);
	}
}

@-ms-keyframes spin {
	0% {
		-ms-transform: rotate(0deg);
	}
	100% {
		-ms-transform: rotate(360deg);
	}
}

@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@-moz-keyframes spin {
	0% {
		-moz-transform: rotate(0deg);
	}
	100% {
		-moz-transform: rotate(360deg);
	}
}
</style>
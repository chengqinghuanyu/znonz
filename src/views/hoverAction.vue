<template>
    <div>
        <a class="a_link">aaa</a>
    </div>
</template>
<style>
.a_link:hover, .entry a[href*='/study/']:hover {
    color: #f30;
    text-decoration: none;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'><path fill='none' stroke='%23ff3300' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/></svg>") repeat-x 0 100%;
    background-size: 20px auto;
    animation: waveMove 1s infinite linear;
}
@keyframes waveMove {
  from { background-position: 0 100%; }
  to { background-position:-20px 100%; }
}
</style>


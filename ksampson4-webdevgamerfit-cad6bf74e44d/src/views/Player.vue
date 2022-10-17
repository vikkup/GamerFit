<!-- Vikku Ponnaganti - Author of this file from Lines 2 - 19, any changes within
these lines authored by someone else will be stated otherwise -->
<template>
    <div class="player">
        <div class="player__sizer">
            <video controls>
                <source type="video/mp4" src="@/assets/metalcat.mp4" />
            </video>
        </div>
    </div>
</template>

<script>
import "../assets/css/Player.scss";

export default {
    name: "Player"
};
</script>
<template>
    <div class="wrapper">
        <div class="check-box" style="position: relative;">
            <div class="account-holder-name" style="position: absolute; top: 40px; left: 60px">John Smith</div>
            <div class="account-holder-address" style="position: absolute; top: 70px; left: 60px">
                123 Cherry Tree Lane <br>
                New York, NY 10001
            </div>
            <div class="check-number-human" style="position: absolute; top: 40px; left: 1060px">554</div>
            <div class="date" style="position: absolute; top: 90px; left: 760px">Date: _____________________ </div>
            <div class="amount-box" style="position: absolute; top: 175px; left: 950px">

            </div>
            <div class="pay-to" style="position: absolute; top: 170px; left: 60px">
                Pay to the <br>Order of
                    ______________________________________________________________________________________________|
                
            </div>
            <div class="amount-line" style="position: absolute; top: 250px; left: 60px">
                ________________________________________________________________________________________________________
                Dollars
            </div>
            <div class="bank-name" style="position: absolute; top: 300px; left: 60px">Bank Name, INC</div>
            <div class="memo" style="position: absolute; top: 390px; left: 60px">
                Memo: ____________________________________
            </div>
            <div class="signature" style="position: absolute; top: 390px; left: 750px">
                _________________________________________________
            </div>
            <div class="banking" style="position: absolute; top: 420px; left: 80px">
                <div class="routing" style="display: inline;">
                    a022303659a
                </div>
                <div class="bank-account" style="display: inline;">1828781200c</div>
                <div class="check-number" style="display: inline; margin-left:20px">554</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.account-holder-name {
    font-size: 20px;
    font-weight: bold;
}
.check-number-human {
    font-size: 20px;
    font-weight: bold;
}
.amount-box::before {
    content: "$";
    font-size: 20px;
    margin-left: -15px;
}
.amount-box {
    width: 225px;
    height: 40px;
    border: 1px solid #c7c7c7;
    background-color: white;
}
.check-box {
    width: 1200px;
    height: 500px;
    border: 1px solid #e6e6e6;
    background-color: white;
    margin: 0 auto;
}

@font-face {
    font-family: 'banking';
    src: url('../assets/micrenc.ttf');
}


.banking {
    font-family: 'banking';
    font-size: 40px;
}
</style>


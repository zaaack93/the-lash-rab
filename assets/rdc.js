const body = document.querySelector("body");

if (body.classList.contains("template-suffix-wholesale-form")) {
  let currentURL = window.location.href;
  currentURL = currentURL.split("#")
  const redirectEl = document.getElementById("rdc-wsale-redirect")

  redirectEl.value = `/products/${currentURL[1]}`
  
}


// BON BON PAGE

  let bbherovid = document.getElementById('bonbon-hero-vid')

if(body.classList.contains('template-bonbon-2022')) {

  let nullVal = "";
 
  
      fetch(window.Shopify.routes.root + 'cart/clear.js', {
  method: 'POST'})
.then(response => { response.json() })
.then(data => { 
  return data})
.catch((error) => {
  console.error('Error:', error);
});

  setTimeout(function () {
       fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({'note':nullVal})
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});
  }, 300)

    fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
  .then(data => { console.log(data) 
    return data });

   let summaryTotalInner = document.createElement('span')
    summaryTotalInner.className = 'bb-card-price-box rdc-f-size-medium'


let qtyBox = document.querySelector('.bonbon-card-qty input')
const minuses = document.querySelectorAll('.bb-card-qty-minus')
const pluses = document.querySelectorAll('.bb-card-qty-plus')
const cartBtns = document.querySelectorAll('.bb-card-atc-btn')

const messBox = document.querySelector('.bonbon-note-box-textarea textarea')
const messBtn = document.querySelector('.bb-mess-btn')

const cartItemsBox = document.querySelector('.bonbon-review-items')
const cartFREE = document.querySelector('.bonbon-review-free')
const summaryTotal = document.querySelector('.bonbon-review-summary-right')
const checkoutBtn = document.querySelector('.bb-checkcout-link')
  


let itemDeleteBtns;
 
// Quantity control
minuses.forEach(minus => {
  minus.addEventListener('click', function () {
  if (this.nextElementSibling.value != 0) {
      this.nextElementSibling.stepDown()
  }
})
})
pluses.forEach(plus => {
  plus.addEventListener('click', function () {
  this.previousElementSibling.stepUp()
})
})

// ATC
const cartItemsBoxArr = [];
const cartItemQtyArr = [];

cartBtns.forEach(cartBtn => {
cartBtn.addEventListener('click', function () {

  const thisImage = this.parentElement.parentElement.parentElement.children[0].children[0]
  const thisTitle = this.parentElement.parentElement.parentElement.children[0].children[1]
  const thisPrice = this.parentElement.parentElement.parentElement.children[0].children[2].children[0]
  const thisQuantity = this.parentElement.previousElementSibling.children[0].children[1].value

  this.innerHTML = 'Added'
  this.style.opacity = '.7'

  const self = this;
const changeATCText = function () {
    self.innerHTML = 'Add to cart'
  self.style.opacity = '1'
}
  
setTimeout(changeATCText, 1000);


  
      // thisQuantity = thisQuantity.children[1].value
  
let newItemData = {
 'items': [{
  'id': this.id,
  'quantity': thisQuantity
  }]
};

  
fetch(window.Shopify.routes.root + 'cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newItemData)
})
.then(response => { return response.json()})
.catch((error) => {
  console.error('Error:', error);
});


  
  let thisrunningQty = Number(thisQuantity);
    if(!cartItemsBoxArr.includes(this.id)) {
          cartItemsBoxArr.push(this.id)
      cartItemQtyArr.push(Number(thisQuantity))
      console.log(cartItemQtyArr)
   
const cartItemsBox = document.querySelector('.bonbon-review-items')
const cartItem = document.createElement('div')
const cartItemInner =  `<div class="bonbon-review-item-left rdc-d-flex rdc-ai-c"><div class="bonbon-review-item-img">${thisImage.outerHTML}
<span>${thisrunningQty}</span></div>
<div>${thisTitle.outerHTML}</div></div>
<div class="bonbon-review-item-right rdc-d-flex rdc-ai-c"><div>${thisPrice.outerHTML}</div>
<span class="bb-item-delete-btn rdc-cursor-p" data-id="${this.id}"><img src="https://cdn.shopify.com/s/files/1/0503/1336/3649/files/close_1.png"></span></div>`

      cartItem.className = 'bonbon-review-item rdc-d-flex rdc-jc-sb rdc-ai-c'
cartItem.setAttribute("data-id", `${this.id}`);
      
  cartItem.innerHTML = cartItemInner
        cartItemsBox.prepend(cartItem);
    thisrunningQty = Number(thisQuantity);

  } else {
      let itemIndex = cartItemsBoxArr.indexOf(this.id)
         
     thisrunningQty += cartItemQtyArr[itemIndex];
cartItemQtyArr[itemIndex] = thisrunningQty
      
      
 const thisCartItem = document.querySelector(`[data-id="${this.id}"]`);

      const newCartItemInner =  `<div class="bonbon-review-item-left rdc-d-flex rdc-ai-c"><div class="bonbon-review-item-img">${thisImage.outerHTML}
<span>${thisrunningQty}</span></div>
<div>${thisTitle.outerHTML}</div></div>
<div class="bonbon-review-item-right rdc-d-flex rdc-ai-c"><div>${thisPrice.outerHTML}</div>
<span class="bb-item-delete-btn rdc-cursor-p" data-id="${this.id}"><img src="https://cdn.shopify.com/s/files/1/0503/1336/3649/files/close_1.png"></span></div>`

      thisCartItem.innerHTML = newCartItemInner
      
  }



  setTimeout(function () {
      fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
  .then(async function(data) {
    console.log(data)
    if(data.item_count > 1) {

if(data.item_count == 2) {
        let addBonBon = {
 'items': [{
  'id': 42047827738817,
  'quantity': 1
  }]
};

await fetch(window.Shopify.routes.root + 'cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(addBonBon)
}).then(response => response.json())

data=await fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
}
   
      cartFREE.classList.remove('rdc-d-none')
       cartFREE.classList.add('rdc-d-flex')
      
      checkoutBtn.href = '/checkout'
      checkoutBtn.classList.remove('rdc-disabled')

      
    } 
             let totalSummaryContent = `<span class="bb-card-price-old">$${(data.original_total_price/100).toFixed(2)}</span>
               <span class="bb-card-price-new rdc-f-size-medium">$${((data.original_total_price*.85)/100).toFixed(2)}</span>`
    
    summaryTotalInner.innerHTML = totalSummaryContent
    summaryTotal.innerHTML = summaryTotalInner.outerHTML
    
    return data

  });
  }, 600)


    itemDeleteBtns = document.querySelectorAll('.bb-item-delete-btn')
  let twoItems = false;
  itemDeleteBtns.forEach(itemDeleteBtn => {
 
  itemDeleteBtn.addEventListener('click', function () {
    console.log(this.getAttribute('data-id'))

    let deleteItemData = {
  'id': this.getAttribute('data-id'),
  'quantity': 0
};

    fetch(window.Shopify.routes.root + 'cart/change.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(deleteItemData)
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});

   if(twoItems) {console.log('1 left')}
    
  

        const thisLineItem = this.parentElement.parentElement

    thisLineItem.remove()

cartItemsBoxArr.splice(0, this.getAttribute("data-id"))
cartItemQtyArr.splice(0, cartItemsBoxArr.indexOf(this.getAttribute("data-id")))

    console.log(cartItemsBoxArr)
    console.log(cartItemQtyArr)


    setTimeout(function () {
            fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
  .then(data => { 
    console.log(data)
    let totalSummaryContent;
    if(data.item_count < 2) {

           fetch(window.Shopify.routes.root + 'cart/clear.js', {
  method: 'POST'})
.then(response => { response.json() })
.then(data => { 
  return data})
.catch((error) => {
  console.error('Error:', error);
});
      
      cartFREE.classList.add('rdc-d-none')
      cartFREE.classList.remove('rdc-d-flex')
                checkoutBtn.href = ''
      checkoutBtn.classList.add('rdc-disabled')
      totalSummaryContent = "";
      summaryTotalInner.innerHTML = totalSummaryContent
    summaryTotal.innerHTML = summaryTotalInner.outerHTML
    } else {
           totalSummaryContent = `<span class="bb-card-price-old">$${(data.original_total_price/100).toFixed(2)}</span>
               <span class="bb-card-price-new rdc-f-size-medium">$${((data.original_total_price*.85)/100).toFixed(2)}</span>`

    summaryTotalInner.innerHTML = totalSummaryContent
    summaryTotal.innerHTML = summaryTotalInner.outerHTML
    }

 

    return data

  });
    }, 600)

 


  })

})


})



messBtn.addEventListener('click', function () {

//   this.innerHTML = 'Submitted'
//   this.style.opacity = '.7'

//   const self = this;
// const changeATCText = function () {
//     self.innerHTML = 'Submit message'
//   self.style.opacity = '1'
// }
  
// setTimeout(changeATCText, 1000);
  
console.log(messBox.value)
let cartNoteData = {
 'note': messBox.value
};
  
fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(cartNoteData)
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});

  setTimeout(function () {
      fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
  .then(data => { console.log(data) 
    return data });
  }, 300)

  
})
})
// BON BON PAGE ----- END


// BON BON PAGE - HOW TO MOBILE
const bbStepBtns = document.querySelectorAll('.bonbon-how-nav span')
const bbStepBoxes = document.querySelectorAll('.bonbon-step')
const bbStepsContainer = document.querySelector('.bonbon-steps')

const setHeight = function () {
  if(window.innerWidth < 768) {
bbStepsContainer.style.height = `${bbStepBoxes[0].clientHeight}px`
  } else {
   bbStepsContainer.style.height = 'auto' 
  }
}
setHeight()

const bbStepArrows = document.querySelectorAll('.bb-step-arrow')

const hideArrows = function () {
const bbStepBoxActive = document.querySelector('.bonbon-step:not(.rdc-m-v-hidden)')
bbStepArrows.forEach(bbStepArrow => {
  bbStepArrow.classList.add('rdc-m-d-flex')
})
  
  if(Array.from(bbStepBoxes).indexOf(bbStepBoxActive) == 0) {
  bbStepArrows[0].classList.remove('rdc-m-d-flex')
} else if(Array.from(bbStepBoxes).indexOf(bbStepBoxActive) == Array.from(bbStepBoxes).length-1) {
  bbStepArrows[1].classList.remove('rdc-m-d-flex')
}
}

hideArrows()
let stepCount = 0;
const moveStep = function () {

  const isPrev = this.id == 'bb-step-arrow-prev' ? true : false;
  

  if(isPrev) {
    stepCount--
  } else {
    stepCount++
  }

  
const changeActive = function () {
    bbStepBoxes.forEach(bbStepBox => {
    bbStepBox.style.opacity = '0'
    bbStepBox.classList.add('rdc-m-v-hidden')
    })
  bbStepBtns.forEach(bbStepBtn => {bbStepBtn.classList.remove('rdc-active')})
  bbStepBoxes[stepCount].classList.remove('rdc-m-v-hidden')
  bbStepsContainer.style.height = `${bbStepBoxes[stepCount].clientHeight}px`
  bbStepBoxes[stepCount].style.opacity = '1';
  bbStepBtns[stepCount].classList.add('rdc-active')
  }

   changeActive()
    hideArrows()

const setDesktop = function () {
    if(window.innerWidth > 767) {
  bbStepBoxes.forEach(bbStepBox => {
    bbStepBox.style.opacity = '1'
    bbStepBox.classList.remove('rdc-m-v-hidden')
    })
  } else {
      changeActive()
  }
}
  
    window.addEventListener('resize', setHeight)
  window.addEventListener('resize', setDesktop)
}

bbStepArrows.forEach(bbStepArrow => {
  bbStepArrow.addEventListener('click', moveStep)
})

window.addEventListener('resize', setHeight)

}

// Cart FREE Shipping Gauge
const freeShippingReq = 100;
const freeShippingGauge = document.querySelector("span.rdc-shipping-gauge")
let atcBtn = document.querySelector('.quantity-submit-row__submit')
let cartOpenBtn = document.querySelector('a.cart-link')

let adjBtns = document.querySelectorAll('.cart-drawer .cart-item__quantity a')  
 console.log(adjBtns)
const updateGauge = function () {
adjBtns = document.querySelectorAll('.cart-drawer .cart-item__quantity a')  
  console.log(adjBtns)
    let currentCartAmount = 0;
let freeShippingGaugeSize = 0;
  let freeShippingDiff = 0;
  const freeShippingText = document.querySelectorAll(".rdc-fs-text")
  
    setTimeout(function () {
    fetch(window.Shopify.routes.root + 'cart.js')
  .then(response => response.json())
  .then(data => {
      currentCartAmount = data.total_price/100;
    console.log(currentCartAmount)

    const freeShippingTextAmt = document.querySelector(".rdc-fs-text-amount")
    
    freeShippingDiff = (freeShippingReq-currentCartAmount).toFixed(2);
    freeShippingTextAmt.innerHTML = `${freeShippingDiff}`

    if(currentCartAmount >= freeShippingReq) {
 freeShippingGaugeSize = 100
      freeShippingText[1].classList.remove("rdc-d-none")
      freeShippingText[0].classList.add("rdc-d-none")
} else {
      freeShippingGaugeSize = (currentCartAmount/freeShippingReq)*100
       freeShippingText[1].classList.add("rdc-d-none")
      freeShippingText[0].classList.remove("rdc-d-none")
}
    freeShippingGauge.style.width = `${freeShippingGaugeSize}%`
})
        adjBtns = document.querySelectorAll('.cart-drawer .cart-item__quantity a')  
      adjBtns.forEach(adjBtn => {adjBtn.addEventListener('click', updateGauge)})
  console.log(adjBtns)
      },2000)
}

updateGauge()

if (body.classList.contains("template-product")) {
atcBtn.addEventListener('click', function () {
  updateGauge()
})
}

cartOpenBtn.addEventListener('click', function () {
updateGauge()
})

     
//PRESS
const pressTextBox = document.querySelector('.rdc-press-texts')
if(pressTextBox) {
const pressTexts = document.querySelectorAll('.rdc-press-text')

const pressLogos = document.querySelectorAll('.rdc-press-logo')
let count = 0;
pressTextBox.style.height = `${pressTexts[count].clientHeight}px`

const changePress = function () {
  if(count < pressTexts.length-1) {
     count++;
  } else {
     count = 0;
  }

  for(let i=0; i<pressTexts.length; i++) {
    pressTexts[i].classList.remove('rdc-active')
    pressLogos[i].classList.remove('rdc-active')
  }
  pressTexts[count].classList.add('rdc-active')
  pressLogos[count].classList.add('rdc-active')
  
}


setInterval(function () {
changePress()
},4000)
}













import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(CSSPlugin, ScrollTrigger)

console.log('I am Hello Pug World')
CSSPlugin.defaultTransformPerspective = 600

const btnBox = document.querySelector('.box2')
const form = document.querySelector('.newForm')

const tl_click = gsap
  .timeline({
    paused: true,

    defaults: {
      duration: 0.3,
      ease: 'circ.inOut(1.5)',
    },
  })

  .to(btnBox, { scale: 0.9 })
  // .to('.box', { scale: 0.985 }, '<')
  .to(btnBox, { scale: 1 })
  // .to('.box', { scale: 1 }, '<')
  .reversed(true)

const tl = gsap
  .timeline({
    paused: true,
    defaults: {
      ease: 'back.inOut(1.5)',
    },
  })

  .to('.box', { yPercent: 50, rotationX: '90' })
  .to(btnBox, { yPercent: -50, rotationX: '90' }, '<')
  .reversed(true)

// btnBox.addEventListener('onPress', e => {
//   const thisBtn = e.target.closest('b')
//   if (!thisBtn) return
// })

function checkKeyDown(keyD) {
  return (
    keyD === 'Enter' ||
    keyD === 13 ||
    ['Spacebar', ' '].indexOf(keyD) >= 0 ||
    keyD === 32
  )
}

btnBox.addEventListener('click', e => {
  const thisBtn = e.target.closest('button')
  if (!thisBtn) return
  tl_click.reversed() ? tl_click.play() : tl_click.reverse()
  tl.reversed() ? tl.play() : tl.reverse()
})

btnBox.addEventListener('keydown', function (e) {
  const thisBtn = e.target.closest('button')
  const keyD = thisBtn.key !== undefined ? e.key : e.keyCode
  if (!thisBtn || !keyD) return

  if (checkKeyDown(keyD)) {
    e.preventDefault()
    tl_click.reversed() ? tl_click.play() : tl_click.reverse()
    tl.reversed() ? tl.play() : tl.reverse()
  }
})

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e.target.dataset.value)
})

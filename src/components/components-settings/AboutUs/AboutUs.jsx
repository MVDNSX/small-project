import c from './AboutUs.module.scss'

export const AboutUs = () => {
  return (
    <div className={c.about}>
      <h1 className={c.header}>Frequently Asked Questions (FAQ)</h1>

      <h2 className={c.question}>What kind of food do you serve?</h2>
      <p className={c.answer}>A Caribbean inspired offering a variety of dishes that includes chicken, fish, salads and desert. We also provide some more. Our menu is carefully crafted to cater to different tastes and dietary preferences, so you can always find something that suits your cravings.</p>

      <h2 className={c.question}>Do you offer vegetarian or vegan options?</h2>
      <p className={c.answer}>Yes, we do! We understand that many of our customers have specific dietary requirements, and we want to make sure that everyone can enjoy our food. We have a dedicated vegetarian and vegan section on our menu, where you can find delicious and nutritious plant-based options.</p>

      <h2 className={c.question}>Can I customize my order?</h2>
      <p className={c.answer}>Absolutely! We believe that every customer is unique and has their own preferences, so we encourage you to customize your order to your liking. You can add or remove toppings, choose your preferred sauce or seasoning, or even create your own dish from scratch. Just let us know what you want, and we'll make it happen.</p>

      <h2 className={c.question}>Do you take pre-orders?</h2>
      <p className={c.answer}>Yes, contact our dedicated team today on 07359154727 who would be happy to assist you.</p>

      <h2 className={c.question}>What is your delivery range?</h2>
      <p className={c.answer}>We deliver within a 3 mile radius</p>
    </div>
  )
}












import React from 'react'
import Button from "./Button.jsx"

const CTA = () => {
  return (
    <section className="bg-primary text-white">
        <div className="text-center flex-col space-y-6 p-8">
        <h2 className="text-2xl">Ready to Take the First Steps?</h2>
        <p className="text-lg">Join thousands of people who have found support and healing through SafeTalk</p>
        <Button variant="secondary">Sign Up Now</Button>
        </div>
    </section>
  )
}

export default CTA
import React from 'react'

const CreateStudent = () => {
  return (
    <section>
        <form>
            <input type='text' name='firstName' placeholder='First Name' />
            <input type='text' name='lastName' placeholder='Last Name' />
            <input type='number' name='grade' placeholder='Grade' />
            <input type='text' name='image' placeholder='Image' />
            <button>Create Student</button>
        </form>
    </section>
  )
}

export default CreateStudent
import React from 'react'

export default function Auth() {
  return (
    <form>
      <label>
        Email:
        <input
        name="email"
        />
      </label>
      <label>
        Password:
        <input
        name="password"
        />
      </label>
    </form>
  )
}

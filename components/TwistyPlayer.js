import { useState } from 'react'

import { parseAlg } from 'cubing/alg'
import { twistyPlayer } from 'cubing/twisty'

const TwistyPlayer = ({ formId, algForm }) => {

  const twizzle_base = 'https://alpha.twizzle.net/edit/index.html?alg='

  const [form, setForm] = useState({
    algorithm: algForm.algorithm,
    twizzle_url: twizzle_base + algForm.algorithm,
  })

  const handleChange = (e) => {
    const target = e.target
    const value = target.value

    setForm({
      algorithm: value,
      twizzle_url: twizzle_base + value,
    })
  }

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="altorithm">
          Input an algorithm:
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-full max-w-md focus:outline-none focus:shadow-outline"
          type="text"
          id="altorithm"
          name="algorithm"
          value={form.algorithm}
          onChange={handleChange}
          placeholder="Algorithm"
        />
      </div>
      <div className="m-10 scramble-image">
        <twisty-player
          puzzle="3x3x3"
          alg={form.algorithm}
          visualization="2D"
          experimental-setup-anchor="end"
          background="none"
          control-panel="none"
        />
      </div>
      <div>
        <a className="btn-blue" href={form.twizzle_url} rel="nofollow">Go to Twizzle!</a>
      </div>
    </div>
  )
}

export default TwistyPlayer

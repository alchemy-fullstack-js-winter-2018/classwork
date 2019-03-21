import React, { useState, useEffect } from 'react';

export default function NoteFormHook({ handleSubmit }) {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState('')
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount
  useEffect(() => {
    fetch('https://yesno.wtf/api')
      .then(res => res.json())
      .then(result => setImage(result.image))
  }, [count])
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <img alt="yes no" src={image} />
    </>
  )
}

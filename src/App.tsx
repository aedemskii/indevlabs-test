import { useRef, useState } from 'react'
import { findMissingNumber } from './assets/utils'
import { testCases } from './assets/testCases'
import { ENTER_SEQUENCE, EXECUTE } from './assets/constants'
import './App.css'

function App() {
  const [ cases, setCases ] = useState<[number[], number | null][]>(testCases);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputRef.current) {
      return;
    }
    const value = inputRef.current.value;
    const newCase = value === '' ? [] : value.split(',').map((elem) => parseInt(elem));
    const result = findMissingNumber(newCase);
    setCases([...cases, [newCase, result]]);
  }

  return (
    <>
      <div className='new-test-case'>
        <div>
          <span>findMissingElement(</span>
          <input
            type='text'
            ref={inputRef}
            placeholder={ENTER_SEQUENCE}
          />
          <span>)</span>
        </div>
        <button onClick={() => handleSubmit()} >
          {EXECUTE}
        </button>
      </div>
      <table className='test-cases-list'>
        <thead>
          <tr>
            <th>Input</th>
            <th>Expected</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((curCase, index) => {
            const output = findMissingNumber(curCase[0]);
            return (
              <tr key={index} className='test-case'>
                  <th className='test-case-input'>
                    {`[${curCase[0].join(', ')}]`}
                  </th>
                  <th className='test-case-expected'>
                    {`${curCase[1]}`}
                  </th>
                  <th className={['test-case-output', curCase[1] === output ? 'correct' : 'incorrect'].join(' ')}>
                    {`${output}`}
                  </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App

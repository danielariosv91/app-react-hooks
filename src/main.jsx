import React from 'react'
import ReactDOM from 'react-dom/client'

import { HooksApp } from './HooksApp'
import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'

import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './multipleHooks/MultipleCustomHooks'
import { FocusScreen } from './useRef/FocusScreen'
import { Memorize } from './useMemo/Memorize'
import { MemoHook } from './useMemo/MemoHook'
import { CallbackHook } from './useMemo/CallbackHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackHook />
  </React.StrictMode>,
)

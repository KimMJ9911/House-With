import { useState } from 'react'
import './App.css'
import Button from './components/button'  // Button 컴포넌트 import

function App() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    alert(`버튼이 클릭되었습니다! (총 ${clickCount + 1}번)`)
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Button Component Test</h1>
      
      {/* 클릭 카운터 */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <p className="text-lg">클릭 횟수: <span className="font-bold text-blue-600">{clickCount}</span></p>
      </div>

      {/* 버튼 테스트 */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">XL:</span>
          <Button size="xl" onClick={handleClick}>XL 버튼 테스트</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">LG:</span>
          <Button size="lg" onClick={handleClick}>LG 버튼 테스트</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">MD:</span>
          <Button size="md" onClick={handleClick}>MD 버튼 테스트</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">SM:</span>
          <Button size="sm" onClick={handleClick}>SM</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">XS:</span>
          <Button size="xs" onClick={handleClick}>XS 버튼</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">WIDE:</span>
          <Button size="wide" onClick={handleClick}>WIDE 버튼</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">NARROW:</span>
          <Button size="narrow" onClick={handleClick}>NARROW</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">NARROW GRAY:</span>
          <Button size="narrowGray" onClick={handleClick}>NARROW GRAY</Button>
        </div>
        
        {/* Disabled 테스트 */}
        <div className="flex items-center gap-4">
          <span className="w-20 text-sm text-gray-600">DISABLED:</span>
          <Button size="lg" disabled>비활성화된 버튼</Button>
        </div>
      </div>
    </div>
  )
}

export default App
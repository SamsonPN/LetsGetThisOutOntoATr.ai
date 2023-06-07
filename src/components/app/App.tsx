import { useState, useEffect, useCallback } from 'react';
import { inference } from '../../utils/inference';
import './App.css';

const App = () => {
  const [src, setSrc] = useState("");

  const generateImage = useCallback(async () => {
    const newSrc: any = await inference("black and white");
    setSrc(newSrc);
  }, [setSrc]);

  useEffect(() => {
    generateImage();
  }, [generateImage])

  return (
    <div className="App">
      <p>Hello world!</p>
      <img src={src} alt="AI Generation Result" />
    </div>
  );
}

export default App;

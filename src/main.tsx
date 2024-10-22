import { createRoot } from 'react-dom/client'
import Preview from './Preview' // 修改为不带.tsx后缀

createRoot(document.getElementById('root')!).render(
  <Preview />
)

import './App.css';
import LikeImage2 from './components/project-hoc/LikeImage2';
import LikePost2 from './components/project-hoc/LikePost2';
import RenderProps from './components/project-render/RenderProps';
import LikeImage3 from './components/project-render/LikeImage3';
import LikePost3 from './components/project-render/LikePost3';

function App() {
  return (
    <div>


      {/* project-hoc */}
      <div>
        <h3>Some Blog</h3>
        <div className='buttons'>
          <LikeImage2 />
          <LikePost2 />
        </div>
      </div>

      {/* project-render*/}
      <div>
        <h3>Some more Blog</h3>
        <div>
          <RenderProps render={(count, handleCount) => (<LikeImage3 count={count} handleCount={handleCount} />)} />
          <RenderProps render={(count, handleCount) => (<LikePost3 count={count} handleCount={handleCount} />)} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import { CORE_CONCEPTS, EXAMPLES } from './Data';

function App() {
  const [selectedTopic, setSelectedTop] = useState(null);

  const handleSelect = (topicKey) => {
    setSelectedTop(topicKey);
  };

  let tabContent = <p>Please choose a topic above.</p>;

  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];

    tabContent = (
      <div className="example-section">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <h2>Core Concepts</h2>
      <section className="bg-intro">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <Intro key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
      <section className='footer-bg'>
      <h3>Examples</h3>
      <ul className='examples'>
        {Object.keys(EXAMPLES).map((exampleKey) => (
          <Footer
            key={exampleKey}
            onSelect={() => handleSelect(exampleKey)}
            isSelected={exampleKey === selectedTopic}
          >
            {EXAMPLES[exampleKey].title}
          </Footer>
        ))}
      </ul>

      {tabContent}
      </section>
    </div>
  );
}

export default App;

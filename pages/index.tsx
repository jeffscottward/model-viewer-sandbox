import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { ModelViewerElement } from "@google/model-viewer/lib/model-viewer";

// Ideal import statement
// import ModelViewer from "@google/model-viewer";

declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": ModelViewerElement;
  }
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Hello
        <model-viewer
          poster={"astronaut/poster" + ".png"}
          src={"astronaut/model" + ".gltf"}
          alt={"model-viewer"}
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          camera-controls
        />
      </main>
    </div>
  );
};

export default Home;

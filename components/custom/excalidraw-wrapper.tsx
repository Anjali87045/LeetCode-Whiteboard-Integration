"use client"
import {
  Excalidraw,
  MainMenu,
  WelcomeScreen,
  getSceneVersion,
  restoreAppState,
  serializeAsJSON,
} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"

interface ExcalidrawWrapperProps {
  identifier: string
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({
  identifier,
}) => {
  let lastsceneVersion: number = -1
  const onchange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    const sceneVersion = getSceneVersion(elements)
    if (sceneVersion > lastsceneVersion) {
      const content = serializeAsJSON(elements, appState, files, "local")
      localStorage.setItem("excalidraw" + "_" + identifier, content)
      lastsceneVersion = sceneVersion
    }
  }

  const retrieveinitialdata = () => {
    const content = localStorage.getItem("excalidraw" + "_" + identifier)
    if (content != null) {
      return JSON.parse(content)
    }
  }

  return (
    <div className="z-50 h-screen">
      <Excalidraw onChange={onchange} initialData={retrieveinitialdata()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Hints.MenuHint />
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.SaveToActiveFile />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
        </MainMenu>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper

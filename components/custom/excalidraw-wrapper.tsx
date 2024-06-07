"use client"
import {
  Excalidraw,
  MainMenu,
  WelcomeScreen,
  serializeAsJSON,
} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"

const ExcalidrawWrapper: React.FC = () => {
  const onchange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ): void => {
    const content: string = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem("excalidraw", content)
  }

  const retrieveinitialdata = () => {
    const content = localStorage.getItem("excalidraw")
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
        </MainMenu>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper

import { SetupHome1 } from './home1.js'
import { SetupProduct1 } from './product1.js'

export class SetupContents {
  static availablePages() {
    return [
      SetupHome1.structure(),
      SetupProduct1.structure(),
    ]
  }
}

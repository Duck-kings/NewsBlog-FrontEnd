import { commands } from '@uiw/react-md-editor';

export const editorCommands: any[] = [
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.group([
    commands.title1,
    commands.title2,
    commands.title3,
    commands.title4,
    commands.title5,
    commands.title6
  ]),
  commands.divider,
  commands.link,
  commands.quote,
  commands.codeBlock,
  commands.orderedListCommand,
  commands.unorderedListCommand
];

export const editorExtraCommands: any[] = [
  commands.codeLive,
  commands.fullscreen
];

const modelEvents = 'change input undo redo';
// TODO: Not writing “You're” here because of issues with Editor.stories.ts, line 42, even when escaping it.
const sampleContent = `
<h2 style="text-align: center;">
  HugeRTE provides a <span style="text-decoration: underline;">feature-rich</span> rich text editing experience.
</h2>
<p style="text-align: center;">
  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">Building an application that needs Rich Text Editing? Check out HugeRTE!</span></span></strong>
</p>`;

export {
  modelEvents,
  sampleContent
};

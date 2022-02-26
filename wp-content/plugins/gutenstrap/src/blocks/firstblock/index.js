var registerBlockType = wp.blocks.registerBlockType;

registerBlockType("gutenstrap/firstblock", {
  edit: function () {
    return "Edit";
  },
  save: function () {
    return "Save";
  },
});
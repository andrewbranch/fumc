export default function originalAttr(buffer, attribute) {
  let model = buffer.get('content');
  if (model.get('isSaving')) {
    return Ember.get(model.changedAttributes(), `${attribute}.firstObject`) || model.get(attribute);
  }
  return model.get(attribute);
}

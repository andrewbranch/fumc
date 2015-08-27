const NEW = 'root.loaded.created';

export default function modelIsNew(model) {
  return model.get('currentState.stateName').startsWith(NEW);
}

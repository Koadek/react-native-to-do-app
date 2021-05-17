class Utils {
  static mergeTodos(todos, streamData) {
    const streamDataIds = streamData.map(todo => todo._id);

    return (
      todos
        .filter(({ _id }) => !streamDataIds.includes(_id))
        .concat(streamData)
        .filter(todo => !todo._deleted)
        .sort((a, b) => a.createdAt - b.createdAt)
    );
  }
}

export default Utils;

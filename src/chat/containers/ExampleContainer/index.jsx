import { getExample } from 'example/actions/example';
import { selectExampleData } from 'example/selectors/example';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ExampleComponent } from 'example/components/ExampleComponent';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state) {
  return {
    exampleData: selectExampleData(state),
  };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getExample,
    },
    dispatch,
  );
}

class Example extends React.Component {
  /**
   * Описание свойств.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */

  static propTypes = {
    getExample: PropTypes.func.isRequired,
    exampleData: PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.shape({
        categories: PropTypes.array,
        id: PropTypes.number,
        joke: PropTypes.string,
      }),
    }).isRequired,
  };

  /**
   * Значения свойств по-умолчанию.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */
  // static defaultProps = {prop: false};

  /**
   * Конструктор компонента
   *
   * @param props - Свойства переданые в компонент.
   * @param context - Контекст.
   * @param updater
   */
  // constructor (props, context, updater) {}

  /**
   * Компонент будет примонтирован.
   * В данный момент у нас нет возможности посмотреть DOM элементы.
   */
  // componentWillMount () {}

  /**
   * Компонент примонтировался.
   */
  componentDidMount() {
    this.props.getExample();
  }

  /**
   * Компонент получает новые props.
   * Этод метод не вызывается в момент первого render.
   *
   * @param nextProps - Новые свойства
   */
  // componentWillReceiveProps (nextProps) {}

  /**
   * Должен ли компонент обновиться?
   * На самом деле, обычно реакт сам отлично разбирается.
   * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
   *
   * @param nextProps - Новые свойства.
   * @param nextState - Новое состояние.
   *
   * @return bool
   */
  // shouldComponentUpdate (nextProps, nextState) {}

  /**
   * Вызывается прямо перед render, когда новые props и state получены.
   * В этом методе нельзя вызывать setState.
   *
   * @param nextProps - Новые свойства.
   * @param nextState - Новое состояние.
   */
  // componentWillUpdate (nextProps, nextState) {}

  /**
   * Отображение компонента
   */
  render() {
    const { exampleData } = this.props;

    return (
      <Fragment>
        <h1>I am a Example container</h1>
        <ExampleComponent
          prop1={exampleData.value && exampleData.value.joke}
          prop2="world"
        />
      </Fragment>
    );
  }

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render'а компонента.
   *
   * @param prevProps - Предыдущие свойства.
   * @param prevState - Предыдущее состояние.
   */
  // componentDidUpdate(prevProps, prevState) {}

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   */
  // componentWillUnmount () {}
}

const ExampleContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Example));

export { ExampleContainer };

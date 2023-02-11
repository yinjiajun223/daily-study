import mitt from 'mitt';
type Events = {
  authReady?: DragEvent;
};
const Bus = mitt<Events>();
export default Bus;


// import Bus from '@/utils/eventBus';
// Bus.emit('authReady'); // 触发authReady事件
// // 其他页面
// Bus.on('authReady', ()=>{});
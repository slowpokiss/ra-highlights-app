

export default function Popular(props: any) {
  return (
      <div className="wrap-item wrap-item-popular">
          <span className="label">Popular!</span>
          {props.children}
      </div>
  )
};
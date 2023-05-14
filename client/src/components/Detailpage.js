import React from 'react'

const Detailpage = ({image, title, content}) => {
  return (
    <div>
        <div className='w-full flex flex-col items-center  '>
        <div className='w-auto h-auto'>
            <img src={image} alt=""
              className='object-cover w-[800px] h-[400px]'    
            />
        </div>
        <div className='text-left w-auto p-20'>         
            <div>
                <h4 className='font-medium text-xs'>TIN TỨC</h4>
                <h3 className='font-bold text-xl text-gray-600'>{title}</h3>
            </div>
            

            <p>{content}</p>

            {/* <div className="social-icons share-icons share-row relative icon-style-outline ">
              <a
                href="whatsapp://send?text=%E2%80%9C%C4%82N%20NGON%20%E2%80%93%20QU%C3%80%20GI%C3%92N%E2%80%9D%20v%E1%BB%9Bi%20voucher%20t%E1%BA%B7ng%20m%C3%B3n%20t%E1%BA%A1i%20Sun%20Homes%20BBQ - https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/"
                data-action="share/whatsapp/share"
                className="icon button circle is-outline tooltip whatsapp show-for-medium tooltipstered"
              >
                <i className="icon-phone" />
              </a>
              <a
                href="//www.facebook.com/sharer.php?u=https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/"
                data-label="Facebook"
                onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="icon button circle is-outline tooltip facebook tooltipstered"
              >
                <i className="icon-facebook" />
              </a>
              <a
                href="//twitter.com/share?url=https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/"
                onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="icon button circle is-outline tooltip twitter tooltipstered"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="mailto:enteryour@addresshere.com?subject=%E2%80%9C%C4%82N%20NGON%20%E2%80%93%20QU%C3%80%20GI%C3%92N%E2%80%9D%20v%E1%BB%9Bi%20voucher%20t%E1%BA%B7ng%20m%C3%B3n%20t%E1%BA%A1i%20Sun%20Homes%20BBQ&body=Check%20this%20out:%20https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/"
                rel="nofollow"
                className="icon button circle is-outline tooltip email tooltipstered"
              >
                <i className="icon-envelop" />
              </a>
              <a
                href="//pinterest.com/pin/create/button/?url=https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/&media=https://homebbq.thietkewebsitemienphi.com/wp-content/uploads/2018/02/voucher-tng-mon.jpg&description=%E2%80%9C%C4%82N%20NGON%20%E2%80%93%20QU%C3%80%20GI%C3%92N%E2%80%9D%20v%E1%BB%9Bi%20voucher%20t%E1%BA%B7ng%20m%C3%B3n%20t%E1%BA%A1i%20Sun%20Homes%20BBQ"
                onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="icon button circle is-outline tooltip pinterest tooltipstered"
              >
                <i className="icon-pinterest" />
              </a>
              <a
                href="//plus.google.com/share?url=https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/"
                target="_blank"
                className="icon button circle is-outline tooltip google-plus tooltipstered"
                onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                rel="noopener noreferrer nofollow"
              >
                <i className="icon-google-plus" />
              </a>
              <a
                href="//www.linkedin.com/shareArticle?mini=true&url=https://homebbq.thietkewebsitemienphi.com/2018/02/06/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq/&title=%E2%80%9C%C4%82N%20NGON%20%E2%80%93%20QU%C3%80%20GI%C3%92N%E2%80%9D%20v%E1%BB%9Bi%20voucher%20t%E1%BA%B7ng%20m%C3%B3n%20t%E1%BA%A1i%20Sun%20Homes%20BBQ"
                onclick="window.open(this.href,this.title,'width=500,height=500,top=300px,left=300px');  return false;"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="icon button circle is-outline tooltip linkedin tooltipstered"
              ></a>
            </div> */}
            <div>
              <a href="" className='text-red-700'>Facebook</a>
            </div>

        </div>

        

    </div>

        {/* bình luận */}
        <div className='text-left w-auto p-20'>
            {/* <h3>Trả lời</h3> */}
            <div>
              <label htmlFor="desc" className='text-2xl font-bold'>Bình luận</label>
                    <textarea
                        id="desc"
                        cols="30" rows="10"
                        className='w-full rounded-md outline-none border border-gray-300 p-2'
                        // value={payload.content}
                        // onChange={(e) => setPayload(prev => ({ ...prev, content: e.target.value }))}
                    ></textarea>
            </div>
        </div>
    </div>
    
  )
}

export default Detailpage
const SocialMediaButton = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/1234567890',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20">
          <path fill="#00ff04" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
        </svg>
      ),
      className: 'whatsapp',
      color: '#25D366'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourprofile',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20">
          <path fill="#0158ef" d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/>
        </svg>
      ),
      className: 'facebook',
      color: '#1877F2'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20">
          <path fill="#00ddfa" d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/>
        </svg>
      ),
      className: 'linkedin',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20">
          <path fill="#222326" d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/>
        </svg>
      ),
      className: 'github',
      color: '#333'
    }
  ];

  return (
    <>
      <style>{`
     body {
          font-family: Arial, sans-serif;
        }
        
        .content h1 {
          margin-bottom: 20px;
          font-size: 2rem;
        }
        
        .content p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        a {
          color: white;
          text-decoration: none;
        }
        
        .social {
          position: fixed;
          top: 20px;
          left: 0;
          z-index: 1000;
        }
        
        .social ul {
          padding: 0px;
          list-style: none;
          transform: translate(-270px, 0);
        }
        
        .social ul li {
          display: block;
          margin: 5px;
          background: rgba(200, 158, 172, 0.5);
          width: 300px;
          text-align: right;
          padding: 10px;
          border-radius: 0 30px 30px 0;
          transition: all 1.5s;
          cursor: pointer;
        }
        
        .social ul li:hover {
          transform: translate(110px, 0);
          background: #c44a73;
          transition: all 1.5s;
        }
        
        .social ul li:hover a {
          color: white;
        }
        
        .social ul li:hover .icon-wrapper {
          background: white;
          transform: rotate(360deg);
          transition: all 1.5s;
        }
        
        .social ul li .icon-wrapper {
          margin-left: 10px;
          background: white;
          padding: 10px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transform: rotate(0deg);
          transition: all 1.5s;
        }
        
        .social ul li a {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 18px;
          font-weight: bold;
        }
        
        .social ul li.whatsapp:hover {
          background: #25D366;
        }
        
        .social ul li.facebook:hover {
          background: #1877F2;
        }
        
        .social ul li.linkedin:hover {
          background: #0A66C2;
        }
        
        .social ul li.github:hover {
          background: #333;
        }
        
        @media (max-width: 768px) {
          .social ul {
            transform: translate(-250px, 0);
          }
          
          .social ul li {
            width: 280px;
          }
          
          .social ul li:hover {
            transform: translate(90px, 0);
          }
          
          .content h1 {
            font-size: 1.5rem;
          }
          
          .content p {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <div className="app-container">
        <nav className=" hidden lg:block social translate-y-[300px] ">
          <ul>
            {socialLinks.map((social, index) => (
              <li key={index} className={social.className}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.name}
                  <span className="icon-wrapper">
                    {social.svg}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SocialMediaButton;
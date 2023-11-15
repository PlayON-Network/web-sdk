import {css} from 'lit';

export const skeletonBoxSizing = css`
  :host, :host * {
    box-sizing: border-box;
  }
`;

export const skeletonAnimated = css`
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .skeleton-animated {
    position: relative;
    overflow: hidden;
  }

  .skeleton-animated::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
            90deg,
            #FFFFFF00 0,
            #FFFFFF1A 20%,
            #FFFFFF4D 60%,
            #FFFFFF00
    );
    animation: shimmer 2s infinite;
    content: '';
  }
`;

export const skeletonVSpace5 = css`
  .skeleton-vspace--5 {
    height: 5px;
  }
`;

export const skeletonVSpace10 = css`
  .skeleton-vspace--10 {
    height: 10px;
  }
`;

export const skeletonVSpace20 = css`
  .skeleton-vspace--20 {
    height: 20px;
  }
`;

export const skeletonVSpace25 = css`
  .skeleton-vspace--25 {
    height: 25px;
  }
`;

export const skeletonVSpace45 = css`
  .skeleton-vspace--45 {
    height: 45px;
  }
`;

export const skeletonIcon = css`
  .skeleton-icon {
    min-width: 24px;
    min-height: 24px;
    border-radius: 4px;
    background-color: #D1D6DE;
  }
`;

export const skeletonLabel = css`
  .skeleton-label {
    width: 60px;
    height: 16px;
    border-radius: 3px;
    background-color: #D1D6DE;
  }
`;

export const skeletonLabel_w100 = css`
  .skeleton-label--w100 {
    width: 100px;
  }
`;

export const skeletonLabel_w150 = css`
  .skeleton-label--w150 {
    width: 150px;
  }
`;

export const skeletonLabel_w250 = css`
  .skeleton-label--w250 {
    width: 250px;
  }
`;

export const skeletonLabel_w350 = css`
  .skeleton-label--w350 {
    width: 350px;
  }
`;

export const skeletonLabel_h12 = css`
  .skeleton-label--h12 {
    height: 12px;
  }
`;

export const skeletonLabel_h18 = css`
  .skeleton-label--h18 {
    height: 18px;
  }
`;

export const skeletonLabel_h25 = css`
  .skeleton-label--h25 {
    height: 25px;
  }
`;

export const skeletonLogoSm = css`
  .skeleton-logo--sm {
    width: 40px;
    height: 40px;
  }
`;

export const skeletonLogoMd = css`
  .skeleton-logo--md {
    width: 80px;
    height: 80px;
  }
`;
import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Web-O-Mania Results',
    paragraph: 'Here is the showcase for the websites that won positions in ACM Web-O-Mania'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  LGBTQ
                  </h3>
                <p className="m-0">
                <p> 1<sup>st</sup> Position and Best Content</p>
                <p>By: Next Door Ally</p>
                <a href="https://lgbtq-web-o-mania.000webhostapp.com/" target="_blank" rel="noopener noreferrer"><Button color="dark">Visit</Button></a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Black Lives Matter
                  </h3>
                <p className="m-0">
                <p> 2<sup>nd</sup> Position</p>
                <p>By: Team Cyphers</p>
                <a href="https://hvirmani.github.io/-BLACKLIVESMATTER/" target="_blank" rel="noopener noreferrer"><Button color="dark">Visit</Button></a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Black Lives Matter
                  </h3>
                <p className="m-0">
                <p> 3<sup>rd</sup> Position</p>
                <p>By: Brogrammers</p>
                <a href="https://mayank712jindal.gitlab.io/blm" target="_blank" rel="noopener noreferrer"><Button color="dark">Visit</Button></a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  National Education Policy
                  </h3>
                <p className="m-0">
                <p>Best UI</p>
                <p>By: Innovatively Bold</p>
                <a href="https://techway007.codes/" target="_blank" rel="noopener noreferrer"><Button color="dark">Visit</Button></a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-04.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Covid-19
                  </h3>
                <p className="m-0">
                <p> Best Individual Website</p>
                <p>By: Web Noob</p>
                <a href="https://yashmunjal.tech/himanshu-covid/" target="_blank" rel="noopener noreferrer"><Button color="dark">Visit</Button></a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
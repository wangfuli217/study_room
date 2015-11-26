#ifndef __CLOCK_IMPL_H__
#define __CLOCK_IMPL_H__

#include "Config.h"
#include "Time.h"

/**
 * \brief namespace : cr(CloudRain21) (my private library)
 */
namespace cr
{

namespace priv
{

class ClockImpl
{
public:
	static Time getCurrentTime();
};
	
}; // namespace priv
	
}; // namespace cr

#endif // __CLOCK_IMPL_H__

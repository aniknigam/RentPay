import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import HeaderBackButton from '../../component/HeaderBackButton/HeaderBackButton';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';
import CommonButton from '../../component/CommonButton/CommonButton';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../common/Colors';
import { indianStates } from '../../common/constant';
import { Dropdown } from 'react-native-element-dropdown';
import Timeline from 'react-native-timeline-flatlist';

// Create a component
const AddProperty = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (data) => {
        const finalData = { ...formData, ...data };
        console.log('Submitting all data:', finalData);
    };

    const Form1 = ({ onNext }) => {
        const [propertyName, setPropertyName] = useState('')
        const [gst, setGst] = useState()
        const [numberOfFloors, setNumberOfFloors] = useState(0)
        const [showDropDown, setShowDropDown] = useState(false);
        const [selectedState, setSelectedState] = useState('');
        const [isFocus, setIsFocus] = useState(false);
        const [value, setValue] = useState(null);

        console.log(indianStates)

        const incrementFloor = () => {
            setNumberOfFloors(prev => prev + 1);
        };

        // Decrease floor count, ensuring it doesn't go below 0
        const decrementFloor = () => {
            setNumberOfFloors(prev => (prev > 0 ? prev - 1 : 0));
        };

        console.log('propertyName==>', propertyName)
        console.log('gst==>', gst)
        return (
            <ScrollView style={{
                marginHorizontal: responsiveWidth(16)
            }}>
                <View style={{
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'centers'
                }}>
                    <TextInput
                        label="Property Name"
                        mode="outlined"
                        value={propertyName}
                        onChangeText={(e) => setPropertyName(e)}
                        style={styles.inputRow}
                        theme={{ roundness: 10 }}
                    />
                    <TextInput
                        label="GSTIN"
                        mode="outlined"
                        value={gst}
                        onChangeText={(e) => setGst(e)}
                        style={styles.inputRow}
                        theme={{ roundness: 10 }}

                    />

                </View>

                <View style={{
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'centers'
                }}>
                    <View style={styles.numberOfFloorStyle}>
                        <Text style={{ color: 'black', marginRight: responsiveWidth(18), fontWeight: '500' }}>{'No. of Floors'}</Text>
                        <TouchableOpacity onPress={decrementFloor}>
                            <View style={{
                                height: responsiveHeight(20),
                                width: responsiveWidth(20),
                                borderRadius: 10,
                                backgroundColor: Colors.brandColor,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <Text style={{ color: 'white' }}>
                                    -
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            marginHorizontal: responsiveWidth(5),
                            color: 'black'
                        }}>{numberOfFloors}</Text>
                        <TouchableOpacity onPress={incrementFloor}>
                            <View style={{
                                height: responsiveHeight(20),
                                width: responsiveWidth(20),
                                borderRadius: 10,
                                backgroundColor: Colors.brandColor,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <Text style={{ color: 'white' }}>
                                    +
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        label="Property Name"
                        mode="outlined"
                        value={gst}
                        onChangeText={(e) => setGst(e)}
                        style={styles.inputRow}
                        theme={{ roundness: 10 }}

                    />

                </View>

                <TextInput
                    label="Manager Name"
                    mode="outlined"
                    value={gst}
                    onChangeText={(e) => setGst(e)}
                    style={styles.inputRow}
                    theme={{ roundness: 10 }}
                />

                <TextInput
                    label="Address"
                    mode="outlined"
                    value={gst}
                    onChangeText={(e) => setGst(e)}
                    style={styles.inputRow}
                    theme={{ roundness: 10 }}

                />

                <View style={{
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'centers'
                }}>
                    {/* <Dropdown
                        label={"Select State"}
                        mode={"outlined"}
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => setShowDropDown(false)}
                        value={selectedState}
                        setValue={setSelectedState}
                        list={indianStates}
                    /> */}

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginLeft: responsiveWidth(7)
                    }}>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={indianStates}
                            itemTextStyle={{ color: 'black' }}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                        <TextInput
                            label="City"
                            mode="outlined"
                            value={gst}
                            onChangeText={(e) => setGst(e)}
                            style={styles.inputRow}
                            theme={{ roundness: 10 }}

                        />
                    </View>

                </View>


                <View style={{
                    marginTop: responsiveHeight(15)
                }}>
                    <CommonButton
                        buttonText={'Next'}
                        onPress={() => {
                            if (propertyName && gst) onNext({ propertyName, gst });
                        }}
                    />
                </View>
            </ScrollView>
        );
    };

    const Form2 = ({ onNext, onBack }) => {
        const [field1, setField1] = useState('');
        const [field2, setField2] = useState('');
        const [numberOfRooms, setNumberOfRooms] = useState(10)
        // Sample data for the timeline, based on number of floors/rooms
        const timelineData = Array.from({ length: numberOfRooms }, (v, i) => ({
            time: `Floor ${i + 1}`,
            title: `Room ${(i + 1) * 10}`,
            // description: `Description for Room ${(i + 1) * 10}`
        }));

        return (
            <View style={{ flex: 1, }}>
                <View style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: Colors.white,
                    flex: 1,
                    marginHorizontal: 2,
                    elevation: 5
                }}>
                    <ScrollView style={{ marginHorizontal: responsiveWidth(16) }}>
                        <View style={{}}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>{'Totoal number of rooms: '}
                                <Text style={{ color: 'black', fontSize: 16 }}>{numberOfRooms}</Text>
                            </Text>
                        </View>

                        <View style={{marginTop:responsiveHeight(15)}}> 
                            <Timeline
                                data={timelineData}
                                circleSize={20}
                                circleColor={Colors.brandColor}
                                lineColor={Colors.brandColor}
                                timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                                timeStyle={{
                                    textAlign: 'center',
                                    backgroundColor: Colors.brandColor,
                                    color: 'white',
                                    padding: 5,
                                    borderRadius: 13
                                }}
                                descriptionStyle={{ color: 'gray' }}
                                options={{
                                    style: { paddingTop: 5 }
                                }}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Back" onPress={onBack} />
                            <Button title="Next" onPress={() => {
                                if (field1 && field2) onNext({ field1, field2 });
                            }} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    };

    const Form3 = ({ onSubmit, onBack }) => {
        const [field1, setField1] = useState('');
        const [field2, setField2] = useState('');

        return (
            <View>
                <TextInput
                    label="Field 1"
                    mode="outlined"
                    value={field1}
                    onChangeText={setField1}
                    style={styles.input}
                />
                <TextInput
                    label="Field 2"
                    mode="outlined"
                    value={field2}
                    onChangeText={setField2}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Back" onPress={onBack} />
                    <Button title="Submit" onPress={() => {
                        if (field1 && field2) onSubmit({ field1, field2 });
                    }} />
                </View>
            </View>
        );
    };

    // Step indicator configuration
    const labels = ["Step 1", "Step 2", "Step 3"];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,

        // Line colors
        stepStrokeCurrentColor: '#553687',  // Current step line color (brand color)
        stepStrokeFinishedColor: '#553687',  // Finished step line color (brand color)
        stepStrokeUnFinishedColor: '#aaaaaa', // Unfinished step line color (grey)
        separatorFinishedColor: '#553687',    // Separator color for finished steps (brand color)
        separatorUnFinishedColor: '#aaaaaa',   // Separator color for unfinished steps (grey)

        // Step indicator colors
        stepIndicatorFinishedColor: '#553687',  // Finished step indicator color (brand color)
        stepIndicatorUnFinishedColor: '#ffffff',  // Unfinished step indicator color (white)
        stepIndicatorCurrentColor: '#ffffff',     // Current step indicator color (white)

        // Label styles
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#553687',   // Current step label color (brand color)
        stepIndicatorLabelFinishedColor: '#ffffff',   // Finished step label color (white)
        stepIndicatorLabelUnFinishedColor: '#aaaaaa', // Unfinished step label color (grey)
        labelColor: '#999999',                        // Default label color for steps
        labelSize: 13,                                // Label font size
        currentStepLabelColor: '#553687',            // Label color for the current step (brand color)
    };



    return (
        <View style={styles.container}>
            <View style={styles.backbuttonContainer}>
                <HeaderBackButton headerText={`Add Property`} onPress={() => console.log('hello')} />
            </View>
            <View style={{ marginVertical: responsiveHeight(12) }}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentStep}
                    labels={labels}
                    stepCount={3}
                />
            </View>
            {currentStep === 0 && <Form1 onNext={handleNext} />}
            {currentStep === 1 && <Form2 onNext={handleNext} onBack={handleBack} />}
            {currentStep === 2 && <Form3 onSubmit={handleSubmit} onBack={handleBack} />}
        </View>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2c3e50',
        // padding: 20,
    },
    inputRow: {
        flex: 1,
        marginHorizontal: responsiveWidth(5),
        borderRadius: 20,
        marginVertical: responsiveHeight(10)
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    backbuttonContainer: {
        marginBottom: responsiveHeight(12)
    },
    numberOfFloorStyle: {
        backgroundColor: Colors.white,
        flex: 1,
        borderRadius: 10,
        height: responsiveHeight(48),
        marginHorizontal: responsiveWidth(5),
        elevation: 2,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: Colors.brandColor,
        marginTop: 4
    },
    inputRow: {
        flex: 1,
        marginHorizontal: responsiveWidth(5),
        borderRadius: 20,
        marginVertical: responsiveHeight(10),
    },
    dropdown: {
        height: responsiveHeight(52),
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        flex: 1,
        marginTop: responsiveHeight(7),
        backgroundColor: 'white',
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray', // Placeholder color
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black', // Selected text color
    },
});

// Make this component available to the app
export default AddProperty;
